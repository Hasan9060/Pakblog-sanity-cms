import { Rule } from "postcss";
import { title } from "process";
import { validation } from "sanity";
import {defineType,defineField,defineArrayMember} from "sanity";
import { author } from "./author";

export const post = defineType({
    name:'Post',
    type: 'document',
    title:'Post',
    fields: [
        defineField({
        name:'title',
        type:'string',
        title:'Post Title',
        validation: Rule => Rule.required().error("This Field is require")
        }),

        //slug Fields
        defineField({
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'title',
                maxLength: 96
            },
            validation: Rule =>Rule.required()
        }),
        defineField({
            name:'summary',
            type:'text',
            title:'Summary',
            validation: Rule=> Rule.required()
        }),
        defineField({
            name:'image',
            type:'image',
            title:'Image',
        }),
        defineField({
            name:'content',
            type:'array',
            title:'Content',
            of:[
                defineArrayMember({
                    type:'block'
                })
            ]
        }),
        defineField({
            name:'author',
            type:'reference',
            title: 'Author',
            to:[{
                type:'Author'
            }]

        })
    ]
})