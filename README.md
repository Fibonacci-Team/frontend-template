# Frontend Template

## Build Setup:

``` bash
# Download repository:
git clone https://github.com/vedees/webpack-template webpack-template

# Go to the app:
cd frontend-template

# Install dependencies:
npm i

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Project Structure:

* `src/pug/pages/*.pug` - main app PUG
* `src/assets/scss` - put custom app SCSS styles here. Don't forget to import them in `index.js`
* `src/assets/css` - the same as above but CSS here. Don't forget to import them in `index.js`
* `src/assets/img` - put images here. Don't forget to use correct path: `assets/img/some.jpg`
* `src/assets/svg` - put svg here. Don't forget to use correct path: `assets/svg/sprite.svg#id`
* `src/js/modules` - put custom app scripts here
* `src/index.js` - main app file where you include/import all required libs and init app
* `src/components` - folder with custom `.vue` components
* `src/store` - app store for vue
* `static/` - folder with extra static assets that will be copied into output folder

<div align="center">
  <h2>Settings:</h2>
</div>

## Main const:
Easy way to move all files.
Default:
``` js
const PATHS = {
  // Path to main app dir
  src: path.join(__dirname, '../src'),
  // Path to Output dir
  dist: path.join(__dirname, '../dist'),
  // Path to Second Output dir (js/css/fonts etc folder)
  assets: 'assets/'
}
```

## Customize:
Change any folders:
``` js
const PATHS = {
  // src must be src
  src: path.join(__dirname, '../src'),
  // dist to public
  dist: path.join(__dirname, '../public'),
  // assets to static
  assets: 'static/'
}
```

## Import Another libs:
1. Install libs
2. Import libs in `./index.js`
``` js
// React example
import React from 'react'
// Bootstrap example
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
```

## Import only SASS or CSS libs:
1. Install libs
2. Go to `/assets/scss/modules/`
3. Import libs in node modules
``` scss
// Sass librarys example:
@import '~swiper/swiper';
@import '~swiper/components/navigation/navigation';
@import '~swiper/components/pagination/pagination';
```

## Import js files:
1. Create another js module in `./js/modules` folder
2. Import modules in `./js/modules/slider` file
``` js
// another js file for example
import './modules/slider';
```

## Vue install:
Default: **already have**

1. Install vue
``` bash
npm install vue --save
```
2. Init vue `index.js`:
``` js
const app = new Vue({
  el: '#app'
})
```
3. Create div id app
``` html
<div id="app">
  <!-- content -->
</div>
```

## Vuex install:
1. Install vuex
``` bash
npm install vuex --save
```
2. Import Vuex
``` js
import store from './store'
```
3. Create index.js in `./store`
``` js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  // vuex content
})
```

## Add Vue Components:
Create your component in `/components/`

**HTML Usage:**
1. Init component in `index.js`:
``` js
Vue.component('example-component', require('./components/Example.vue').default)
```
2. Any html files:
``` html
 <example-component />
```

**VUE Usage:**
1. import components in .vue:
``` js
import example from '~/components/Example.vue'
```
2. Register component:
``` js
  components: {
    example
  }
```
3. Init in vue component:
``` html
<example />
```

## PUG Dir Folder
#### Deafult
* .pug dir: `./src/pug`
* Configurations: in `./build/webpack.base.conf.js`
``` js
const PAGES_DIR = PATHS.src
```

**Usage:**
All files must be created in the `./src/pug` folder.
Example:
``` bash
./src/pug/pages/index.pug
./src/pug/pages/about.pug
```

## Create Another Pug Files:
#### Default: 
Automatic creation any pug pages:
1. Create another pug file in `./src/pug/pages` (main folder)
2. Open new page `http://localhost:8082/about.html` (Don't forget to RERUN dev server)

## SVG Sprites

#### Import svg files
Automatic creation sprite:
1. Add `.svg` file in `./src/assets/svg`
2. Run dev server (You don't need to RERUN dev server)

#### Usage in Pug
``` bash
+svg('to-top', 20, 20, 'to-top')
```
More about mixin look in `./src/pug/utils/mixins.pug` 
#### Result in HTML
``` html
<svg width="20" height="20" class="to-top">
    <use xlink:href="assets/svg/sprite.svg#to-top"></use>
</svg>
```

## Linters

It is not necessary to change validation rules manually, it is better to discuss it together and make a general decision.

Along with the validation, the autofix is started - everything that can be corrected by the linter in automatic mode.

### Style validation (stylint)
Validation rules are described in .stylelintrc.json

[How to add an exception for a validator](https://stylelint.io/user-guide/ignore-code#within-files)

Examples:
``` scss
#id {
  color: pink !important; /* stylelint-disable-line declaration-no-important */
}

/* stylelint-disable */
a {}
/* stylelint-enable */

#id {
  /* stylelint-disable-next-line declaration-no-important */
  color: pink !important;
}
```

### Javascript validation (eslint)
Validation rules are described in .eslintrc.json

[How to add an exception for a validator](https://eslint.org/docs/user-guide/configuring.html#disabling-rules-with-inline-comments)

Examples:
``` js
alert('foo'); /* eslint-disable-line no-alert */

/* eslint-disable */
alert('foo');
/* eslint-enable */

/* eslint-disable no-alert, no-console */
alert('foo');
console.log('bar');
/* eslint-enable no-alert, no-console */
```


## TODO template improvements
- [ ] Make pug structure
- [ ] Make sass structure
- [ ] Optimize styles file size
- [ ] Adjust fluid typography
- [ ] Rename grid classes
- [ ] Check image optimization
- [ ] Stylelint: BEM
- [ ] Stylelint: styles order
- [ ] Lazy load images/videos/iframe
- [ ] Add default favicon 
- [ ] Webpack chunks loading

**DONE:**
- [x] SASS linter
- [x] Javascript linter 
- [x] HTML linter
- [x] Git hook for project testing

## License
[MIT](./LICENSE)

Copyright (c) 2020-present, [Andrii Helever](https://github.com/gelbman20), [Kateryna Minakova](https://github.com/Retoyfer)
