const fs = require("fs");
const path = require("path");

const title = process.argv[2];
if (!title) {
  console.log("Please provide a title for the post.");
  process.exit(1);
}

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const date = new Date().toISOString().split("T")[0];
const content = `---
title: "${title}"
date: ${date}
layout: layouts/post.njk
tags: posts
---

Write your content here.
`;

const filePath = path.join(__dirname, `../posts/${slug}.md`);
fs.writeFileSync(filePath, content, "utf8");

console.log(`Post created: ${filePath}`);

