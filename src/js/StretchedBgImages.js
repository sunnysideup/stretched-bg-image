'use strict';

(
  function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(factory)
    } else if (typeof exports === 'object') {
      module.exports = factory()
    } else {
      root.StretchedBgImages = factory()
    }
  }(
    typeof window !== 'undefined' ? window : this,
    function () {
      if (typeof window === 'undefined') {
        return null
      }

      /**
       *
       * @type {Function}
       * @constructor
       */
      const StretchedBgImages = function () {}
      StretchedBgImages.apply = function (opt) {
        // defaults ...
        const defaultClassRanges = [
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
        const treshold = 0.8
        const defaultQueryString = '.stretched-bg-images'
        const defaultErrorClass = 'stretched-bg-images-error'

        // set options
        opt = opt || {}
        const classRanges = opt.classRanges || defaultClassRanges
        const queryString = opt.queryString || defaultQueryString
        const errorClass = opt.errorClass || defaultErrorClass

        // observer method
        const ro = new window.ResizeObserver(
          entries => {
            for (const entry of entries) {
              if (entry.target.handleResize) {
                entry.target.handleResize(entry)
              }
            }
          }
        )

        // find elements...
        const entries = document.querySelectorAll(queryString)

        // loop elements
        for (let i = 0; i < entries.length; ++i) {
          const entry = entries[i]
          ro.observe(entry)
          // set resize Method
          entry.handleResize = entry => {
            const height = entry.target.clientHeight;
            const width = entry.target.clientWidth;
            const ratio = width / height;
            let hit = false;

            const updateClasses = () => {
              for (let j = 0; j < classRanges.length; ++j) {
                const range = classRanges[j];
                const match = ratio >= range.min && ratio <= range.max;
                const closeEnough =
                  ratio >= range.min * treshold && ratio <= range.max / treshold;

                if (match) {
                  hit = true;
                  entry.target.classList.add(range.className);
                } else if (!closeEnough) {
                  entry.target.classList.remove(range.className);
                }
              }

              const errorClassFor1 = errorClass + (ratio > 1 ? '-landscape' : '-portrait');
              const errorClassFor2 = errorClass + (ratio < 1 ? '-landscape' : '-portrait');

              if (hit) {
                entry.target.classList.remove(errorClass);
                entry.target.classList.remove(errorClassFor1);
                entry.target.classList.remove(errorClassFor2);
              } else {
                entry.target.classList.add(errorClass);
                entry.target.classList.add(errorClassFor1);
              }
            };
            // Defer class updates to avoid layout thrashing
            requestAnimationFrame(updateClasses);
          };
        }
      }
      return StretchedBgImages
    }
  )
)
