const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Add custom date filter
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("index.js");
  // Passthrough for Tippy.js
  eleventyConfig.addPassthroughCopy({
    "node_modules/tippy.js/dist/tippy.all.min.js": "tippy.js",
    "node_modules/tippy.js/dist/tippy.css": "tippy.css",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/normalize.css/normalize.css": "normalize.css",
  });
  // Passthrough for TypeIt
  eleventyConfig.addPassthroughCopy({
    "node_modules/typeit/dist/typeit.min.js": "typeit.js",
  });
  // Define the "posts" collection to include all Markdown files in the "posts/" directory
  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob("posts/*.md");
  });
  eleventyConfig.addPassthroughCopy("initTyping.js");
  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(new Date(dateObj), { zone: "utc" }).toFormat(format);
  });

  // Default Eleventy settings
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "dist",
    },
    htmlTemplateEngine: "njk",
  };
};
