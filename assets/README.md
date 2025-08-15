# Assets Folder

This folder is for storing static assets like images, fonts, or icons that are used in the portfolio website.

## How to use

1.  Add your image files to this directory (e.g., `my-project-image.png`).
2.  In the `constants.ts` file, you can now reference these images using a relative path.

For example, update the `imageUrl` property for a project like this:

```typescript
{
  id: 1,
  title: "My Project",
  // ...
  imageUrl: "./assets/my-project-image.png",
  // ...
},
```
