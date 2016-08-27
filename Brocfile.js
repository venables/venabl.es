'use strict';

const assetRev = require('broccoli-asset-rev');
const autoprefixer = require('broccoli-autoprefixer');
const BroccoliSass = require('broccoli-sass');
const browserify = require('broccoli-fast-browserify');
const funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const uglifyJs = require('broccoli-uglify-js');

/**
 * Javascript
 */
let js = browserify('src/javascripts', {
  bundles: {
    'application.js': {
      entryPoints: ['application.js']
    }
  }
});

js = uglifyJs(js, { compress: true, mangle: true });

js = funnel(js, {
  destDir: 'javascripts'
});

/**
 * Stylesheets (sass)
 */
let css = new BroccoliSass(['src/stylesheets'], 'application.css.scss', 'application.css', {
  outputStyle: 'compressed'
});

css = autoprefixer(css);

css = funnel(css, {
  destDir: 'stylesheets'
});

/**
 * Images
 */
let images = funnel('src/images', {
  destDir: 'images'
});

/**
 * Views (HTML)
 */
let html = funnel('src', {
  destDir: '',
  exclude: ['stylesheets/**/*', 'javascript/**/*', 'images/**/*']
});

/*
 * Asset Digest
 */
let assets = mergeTrees([js, css, images, html], { overwrite: true });

assets = assetRev(assets, {
  extensions: ['js', 'css', 'png', 'jpg', 'gif', 'svg'],
  replaceExtensions: ['html', 'js', 'css'],
  generateAssetMap: true
});

module.exports = assets;
