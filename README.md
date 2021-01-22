# stretched-bg-image
NPM package - adds a stretched (filling) BG image to any html element where you add the "stretched-bg-image" class.

Also See

 - [NPM Listing](https://www.npmjs.com/package/@sunnysideup/stretched-bg-image)
 - [Demo and installation instructions](https://sunnysideup.github.io/stretched-bg-image/demo/index.html)

 <h2>Installation // new-school</h2>
      <p>
        Install via npm:
      </p>
      <pre class="code">
        npm i @sunnysideup/stretched-bg-image
      </pre>    <p>
        Add the following code to your js file:
      </p>
      <pre class="code">
        const StretchedBgImages = require('stretched-bg-images')
      </pre>
      <p>
        And, add the following code to your scss file:
      </p>
      <pre class="code">
        import "StretchedBgImages";
      </pre>


      <h2>Installation // old-school</h2>
      <p>
        Add the following code to your html:
      </p>
      <pre class="code">
        &lt;link rel="stylesheet" href="stretched-bg-images/src/css/StretchedBgImages.css" /&gt;
        ...
        &lt;script src="stretched-bg-images/src/js/StretchedBgImages.js"&gt;&lt;/script&gt;
        &lt;script&gt;
          // add script here!
        &lt;/script&gt;
      </pre>
      <h2>Applying it to your page ...</h2>
      <p>
        To apply it to any element, use the <em>stretched-bg-images</em> class, like this:
      </p>
      <pre class="code">
        &lt;div class="stretched-bg-images"&gt;
          ...
        &lt;/div&gt;
      </pre>


      <h2>Running it</h2>
      <p>
        Add the following JS (old and new school):
      </p>
      <pre>
      StretchedBgImages.apply()
      </pre>
      <p>
        Or with all options defined:
      </p>
      <pre>
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
      </pre>


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
      <pre class="code">
        &lt;svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 123 456"&gt;...&lt;/svg&gt;
      </pre>
