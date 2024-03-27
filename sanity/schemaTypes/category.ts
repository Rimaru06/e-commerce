import { defineType } from "sanity";

export default defineType({
    name : "category",
    title : "Category",
    type : "document",
    fields : [
        {
            name : 'name',
            title : "Name of the category",
            type : "string"
        }
    ]
})