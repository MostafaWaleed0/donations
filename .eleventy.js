const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const rssPlugin = require('@11ty/eleventy-plugin-rss');

function global(eleventyConfig, userOptions = {}) {
  const {parse} = require('node-html-parser');

  const options = {
    name: 'lazy-images',
    ...userOptions
  };

  eleventyConfig.addTransform(options.extensions, (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const root = parse(content);
      const images = root.querySelectorAll('img');
      images.forEach(img => {
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
      });
      return root.toString();
    }
    return content;
  });
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/asset/img');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addWatchTarget('./src/css');
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(global, {});
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'public'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};
