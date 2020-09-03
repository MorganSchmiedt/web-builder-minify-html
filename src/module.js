'use strict'
/* eslint-env node */

const {
  extname,
} = require('path')

const { minify } = require('html-minifier')

/**
 * @param {Map} fileMap List of files with their content
 * @param {object} opt Options - Unused
 * @param {object} opt.minifierOptions html-minifier options
 * @param {object} lib Engine library
 * @param {function} lib.log Log text
 */
module.exports = async(fileMap, opt, { log }) => {
  for (const [path, content] of fileMap.entries()) {
    if (extname(path) === '.html') {
      const contentMinified = minify(content, opt.minifierOptions)

      fileMap.set(path, contentMinified)

      log(`Minify ${path}`)
    }
  }
}
