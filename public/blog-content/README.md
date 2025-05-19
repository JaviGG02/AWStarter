# Blog Content Directory

This directory contains all the blog posts for the AWStarter website. Each blog post is stored in its own directory, with a markdown file for the content and any associated images.

## Directory Structure

```
blog-content/
├── post-slug-1/
│   ├── post.md
│   ├── image1.jpg
│   └── image2.jpg
├── post-slug-2/
│   ├── post.md
│   └── featured-image.jpg
└── ...
```

## Creating a New Blog Post

1. Create a new directory with a slug name (e.g., `my-new-post`)
2. Add a `post.md` file with your content
3. Add any images you want to include in the post

## Markdown Format

Each markdown file should follow this format:

```markdown
# Post Title

*Publication Date*

Brief excerpt or introduction to the post.

## Section Heading

Content goes here...

![Image Description](./image-filename.jpg)

More content...
```

## Front Matter

In the future, when implementing a backend, you might want to add front matter to your markdown files:

```markdown
---
title: Post Title
date: 2023-06-15
author: Your Name
tags: [tag1, tag2]
featured_image: ./featured-image.jpg
---

Content starts here...
```