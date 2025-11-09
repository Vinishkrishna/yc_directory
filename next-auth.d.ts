// now exploring TypeScript module augmentation, which is a key step when customizing NextAuth types
declare module "next-auth" {
    interface Session {
        id: string;
    }
    interface JWT {
        id: string;
    }
}
//This is TypeScript’s way of extending the built-in NextAuth types — so that when you add custom fields like id to your JWT or Session objects, TypeScript recognizes them (and doesn’t throw type errors)