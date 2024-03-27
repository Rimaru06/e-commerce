import { defineType } from "sanity";

export default defineType({
    name : 'heroImage',
    type : 'document',
    title : 'Two Hero Images',
    fields : [
        {
            name : 'image1',
            type : 'image',
            title : 'First Image'
        },
        {
            name : 'images2',
            type : 'image',
            title : "Second Images"
        }
    ]
})