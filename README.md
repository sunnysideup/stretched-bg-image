# Stretched Background Images
NPM package - adds a stretched (filling) BG image to any html element where you add the "stretched-bg-image" class.

# credits

For examples images in demo, see demo.  Idea and design for squiggly images is by [Niels from Guts](https://guts.co.nz)

# Also See

- [NPM Listing](https://www.npmjs.com/package/@sunnysideup/stretched-bg-image)
- [Demo](https://sunnysideup.github.io/stretched-bg-image/demo/index.html)

# Installation // new-school


Install via npm:


```shell
npm i @sunnysideup/stretched-bg-image
```    

Add the following code to your js file:


```js
const StretchedBgImages = require('stretched-bg-images')
```

And, add the following code to your scss file:


```scss
import "StretchedBgImages";
```


# Installation // old-school


Add the following code to your html:


```html
<link rel="stylesheet" href="stretched-bg-images/src/css/StretchedBgImages.css" />
...
<script src="stretched-bg-images/src/js/StretchedBgImages.js"></script>
<script>
  // add script here!
</script>
```
# Applying it to your page ...


To apply it to any element, use the <em>stretched-bg-images</em> class, like this:


```html
<div class="stretched-bg-images">
  ...
</div>
```


# Running it


Add the following JS (old and new school):


```js
StretchedBgImages.apply()
```

Or with all options defined:


```js
const options = {

queryString: '.stretched-bg-images, ul',

errorClass: 'ratio-is-off-the-charts',

classRanges = [
  {
    max: '8',
    min: '2',
    className: 'panorama'
  },
  {
    max: '2',
    min: '1',
    className: 'landscape'
  },
  {
    max: '1',
    min: '0.5',
    className: 'portrait'
  },
  {
    max: '0.5',
    min: '0.125',
    className: 'skyscraper'
  }
]
}
StretchedBgImages.apply(options)
```


# Options

 - Above you are seeing the default values, you can set them as you see fit.
 - `max` and `min` refer the maximum and minimum <em>aspect ratio</em> defined as <strong>width divided by height</strong>
  (i.e. 8 means that the width is four times greater than the height of the containing box.)
 - `queryString` can be anything that works with: `document.querySelectorAll`.
 - `errorClass` is the class that is added when the ratio of the element is outside the described scopes in `classRanges`.


# Using SVGs

If you are using SVGs then you need to remove <span class="code">width</span> and <span class="code">height</span>
attributes from SVG and add <span class="code">preserveAspectRatio="none"</span>.
Like this:


```svg
<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 123 456">...</svg>
```

You can use [https://yoksel.github.io/url-encoder/](https://yoksel.github.io/url-encoder/) to convert SVGs to backround images.  Making your code even faster.
