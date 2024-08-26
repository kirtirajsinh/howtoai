import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title of blog article",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug of your blog article",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "titleImage",
      type: "image",
      title: "Title Image",
    }),
    defineField({
      name: "smallDescription",
      type: "text",
      title: "Small Description",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Describe the image for people who can't see it`,
            },
            {
              type: "string",
              name: "caption",
              title: "Caption",
            },
          ],
        },
      ],
    }),
  ],
});
