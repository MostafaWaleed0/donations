const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const htmlmin = require('html-minifier');

function global(eleventyConfig, userOptions = {}) {
  const {parse} = require('node-html-parser');

  const options = {
    ...userOptions
  };

  eleventyConfig.addTransform(options.extensions, (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const root = parse(content);
      const images = root.querySelectorAll('img');
      const videos = root.querySelectorAll('video');

      images.forEach(img => {
        img.setAttribute('loading', 'lazy');
      });
      videos.forEach(video => {
        video.setAttribute('loading', 'lazy');
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
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      });
      return minified;
    }
    return content;
  });

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
