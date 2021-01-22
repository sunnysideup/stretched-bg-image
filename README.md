# Stretched Background Images
NPM package - adds a stretched (filling) BG image to any html element where you add the "stretched-bg-image" class.

# Also See

- [NPM Listing](https://www.npmjs.com/package/@sunnysideup/stretched-bg-image)
- [Demo and installation instructions](https://sunnysideup.github.io/stretched-bg-image/demo/index.html)

<h2>Installation // new-school</h2>
<p>
Install via npm:
</p>
```shell
npm i @sunnysideup/stretched-bg-image
```    
<p>
Add the following code to your js file:
</p>
```js
const StretchedBgImages = require('stretched-bg-images')
```
<p>
And, add the following code to your scss file:
</p>
```css
import "StretchedBgImages";
```


<h2>Installation // old-school</h2>
<p>
Add the following code to your html:
</p>
```html
<link rel="stylesheet" href="stretched-bg-images/src/css/StretchedBgImages.css" />
...
<script src="stretched-bg-images/src/js/StretchedBgImages.js"></script>
<script>
  // add script here!
</script>
```
<h2>Applying it to your page ...</h2>
<p>
To apply it to any element, use the <em>stretched-bg-images</em> class, like this:
</p>
```html
<div class="stretched-bg-images">
  ...
</div>
```


<h2>Running it</h2>
<p>
Add the following JS (old and new school):
</p>
```js
StretchedBgImages.apply()
```
<p>
Or with all options defined:
</p>
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


<h2>Options</h2>
<ul>
<li>Above you are seeing the default values, you can set them as you see fit.</li>
<li>
  <q>max</q> and <q>min</q> refer the maximum and minimum <em>aspect ratio</em> defined as <strong>width divided by height</strong>
  (i.e. 8 means that the width is four times greater than the height of the containing box.)</li>
<li>
  <q>queryString</q> can be anything that works with: <q>document.querySelectorAll</q>.
</li>
<li>
  <q>errorClass</q> is the class that is added when the ratio of the element is outside the described scopes in <q>classRanges</q>.
</li>
</ul>
<h2>Using SVGs</h2>
<p>
If you are using SVGs then you need to remove <span class="code">width</span> and <span class="code">height</span>
attributes from SVG and add <span class="code">preserveAspectRatio="none"</span>.
Like this:
</p>
```svg
<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 123 456">...</svg>
```
