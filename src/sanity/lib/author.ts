import { defineType,defineField } from "sanity";

export const author= defineType({
        name: 'Author',
        type: 'document',
        title: 'Authorname',
        fields: [
            defineField ({
                name: 'name',
                type: 'string',
                title: 'Authorname',
            }),
            defineField({
                name:'bio',
                type: 'text',
                title: 'Bio'
            }),
            defineField({
                name:'image',
                type:'image',
                title:'Image',
                options: {
                    hotspot: true
                }
            })
        ]
})