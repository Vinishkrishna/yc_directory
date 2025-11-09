import { defineType,defineField } from "sanity";

export const playlist = defineType({
    name: "playlist",
    title: "Playlists",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source:'title'//develop based on title
            }
        }),
        defineField({
            name: 'select',
            type: 'array',
            of: [{ type: 'reference', to: [{type: 'startup'}] }], //reference to a type of author
        }),
    ],
});
//GROQ is sanity's open-source language