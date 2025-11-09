import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { writeClient } from "./sanity/lib/write-client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries";
import { client } from "./sanity/lib/client";

// ✅ Exporting NextAuth with correct structure
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],

  callbacks: {
    // 🔹 Called when user signs in with GitHub
    async signIn({ user, profile }) {
      const { name, email, image } = user;
      const { id, login, bio } = profile as {
        id: string;
        login: string;
        bio?: string;
      };

      // Fetch author by GitHub ID from Sanity
      const existingUser = await client.withConfig({useCdn:false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id });

      // If user not found, create new author document in Sanity
      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id, // custom field, not Sanity's _id
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        });
      }

      return true;
    },

    // 🔹 Runs whenever JWT (token) is created or updated
    async jwt({ token, account, profile }) {//This runs whenever a JWT (JSON Web Token) is created or updated.It’s used internally by NextAuth to keep user information between requests
      if (account && profile) {//This ensures the logic only runs when the user is logging in (not on every token refresh).
        const user = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id: profile?.id,
        });

        // Store Sanity's internal author ID in the token
        token.id = user?._id;
      }
      return token;
    },

    // 🔹 Runs whenever session is accessed (client-side or server-side)
    async session({ session, token }) {//This runs whenever a session is created or accessed on the client.
      Object.assign(session, { id: token.id });//Merges your custom field (id) from the JWT into the session object.After this, your frontend can access session.id (Sanity author ID)
      return session;//Returns the session with your added field
    },
  },
});
// NextAuth({ providers: [] })
// You call the NextAuth function and pass in a configuration object.
// This configuration defines:
// Which authentication providers (like Google, GitHub, Credentials, etc.) to use.
// Any callbacks, session options, pages, and theme settings, etc.
