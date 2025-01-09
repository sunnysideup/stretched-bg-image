'use strict';

(function (root, factory) {
  // Support for different module definitions (AMD, CommonJS, Global)
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.StretchedBgImages = factory();
  }
}(
  typeof window !== 'undefined' ? window : this, // Set root context
  function () {
    // Return null if window is undefined (e.g., in Node.js)
    if (typeof window === 'undefined') {
      return null;
    }

    // Constructor function for StretchedBgImages
    const StretchedBgImages = function () {};

    // Main apply method
    StretchedBgImages.apply = function (options = {}) {
      // Default configuration
      const defaultClassRanges = [
        { max: '8', min: '2', className: 'panorama' },
        { max: '2', min: '1', className: 'landscape' },
        { max: '1', min: '0.5', className: 'portrait' },
        { max: '0.5', min: '0.125', className: 'skyscraper' }
      ];
      const defaultQueryString = '.stretched-bg-images';
      const defaultErrorClass = 'stretched-bg-images-error';
      const treshold = 0.8; // Ratio threshold for close matches

      // Merge user options with defaults
      const classRanges = options.classRanges || defaultClassRanges;
      const queryString = options.queryString || defaultQueryString;
      const errorClass = options.errorClass || defaultErrorClass;

      // Create a ResizeObserver to monitor element size changes
      const resizeObserver = new window.ResizeObserver(entries => {
        entries.forEach(entry => {
          if (entry.target.handleResize) {
            entry.target.handleResize(entry);
          }
        });
      });

      // Select elements matching the query string
      const elements = document.querySelectorAll(queryString);

      // Iterate over selected elements
      elements.forEach(element => {
        resizeObserver.observe(element); // Start observing the element

        // Handle resize logic for each element
        element.handleResize = entry => {
          const height = entry.target.clientHeight;
          const width = entry.target.clientWidth;
          const ratio = width / height;
          let matched = false;

          // Check ratio against class ranges
          classRanges.forEach(range => {
            const isMatch = ratio >= range.min && ratio <= range.max;
            const isCloseEnough = ratio >= range.min * treshold && ratio <= range.max / treshold;

            if (isMatch) {
              matched = true;
              entry.target.classList.add(range.className);
            } else if (!isCloseEnough) {
              entry.target.classList.remove(range.className);
            }
          });

          // Error class logic
          const errorClassLandscape = `${errorClass}-landscape`;
          const errorClassPortrait = `${errorClass}-portrait`;

          if (matched) {
            entry.target.classList.remove(errorClass, errorClassLandscape, errorClassPortrait);
          } else {
            entry.target.classList.add(errorClass);
            entry.target.classList.add(ratio > 1 ? errorClassLandscape : errorClassPortrait);
          }
        };
      });
    };

    return StretchedBgImages;
  }
));
