## vibe-website-new
Produce pages for the new official website.

## Project setup
```
pnpm i
```

### Compiles and hot-reloads for development
```
pnpm dev 
```

### Compiles and minifies for production
```
pnpm build
```

### Lints and fixes files
```
pnpm lint
```

_____
## Technology stack
* CLI:
  * vite (run and build faster)
* MVVM framework:
  * vue3 (virtual dom)
* Router:
  * vitepress router
* UI framework:
  * element-plus (sass and less dependence, import indemand)
* Js compatibility:
  * babel (convert js and help element import css indemand)
* Js efficiency:
  * lodash
* Formatter:
  * eslint (format code)

### See more info in [package.json](./package.json).

_____
### Customize configuration
See [Vite Configuration Reference](https://vitejs.cn/guide/).

See [Eslint Configuration Reference](https://eslint.bootcss.com/docs/user-guide/getting-started).

_____
### Specification
#### File name
* js: `keba-case` (In addition to some special cases)
* vue: `upper-camel-case`
* directory:
  * component folder with `Index.vue` : `upper-camel-case`
  * other `camel-case`

#### Import order
1. node-modules `dependency`
2. `.vue` file
3. `.js` file

#### Other
* Html template `""` , JS `''`
* Couputed value must return a value!!!
* v-for must set v-key (unique value like id)
* don't use v-for and v-if in the same element
* use simple expression in vue template
* use multi-words for components name
* component style declarations are scoped like `.unit-page .button`

### Recomand vscode Extensions
* Vue Language Features (Volar)
* ESLint
* Rainbow Brackets
* Sass
* Tabnine AI Auto...
* Vue
