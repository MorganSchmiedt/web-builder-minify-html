## Web Builder Module - Minify HTML files

This module allows the [@deskeen/web-builder](https://github.com/deskeen/web-builder) engine to minify HTML files.

It uses the [@kangax/html-minifier](https://github.com/kangax/html-minifier) package under the hood.

## Install

```
npm install @deskeen/web-builder
npm install @deskeen/web-builder-minify-html
```

### Usage

And add the module to the list of modules: 

```javascript
const builder = require('@deskeen/web-builder')
await builder.build({
  source: [
    // List of files or directories
  ],
  modules: [
    [
      '@deskeen/web-builder-minify-html',
      {
        minifierOptions: {
          // 'html-minifier' package options 
        }
      }
    ]
  ]
})
```


## Contact

You can reach me at {my_firstname}@{my_name}.fr


## Licence

MIT Licence - Copyright (c) Morgan Schmiedt