module.exports = function(eleventyConfig) {

    //Tell 11ty to search these directories for files
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('pages');

    //Tell 11ty that all files 
    return {
        passthroughFileCopy: true,
        pathPrefix: "/",
        dir: {
            input: "./",
            output: "_site",
            includes: "_includes"
        },
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "njk",
        templateFormats: ["md", "html", "njk"]
    }
    
}

