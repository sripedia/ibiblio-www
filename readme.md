# Sripedia www site

This site is statically served on ibiblio.org/sripedia

The idea is to generate the html here and keep the media files on sripedia

This makes this repo an html top cap layer points to all the right places

11ty is used to bring about a more streamlined look&feel across all the different subsections of the site.

## Getting started

```
npm run build
```

```
rsync -avz _site/ sripedia@login.ibiblio.org:html/
```

## Configuration

See .eleventy.js and .eleventyignore

Notes:
- To copy a directory over see kbhtml entry in the .eleventy.js and .eleventyignore files
