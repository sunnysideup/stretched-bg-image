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

        const defaultQueryString = '.stretched-bg-images'
        const defaultErrorClass = '.stretched-bg-images-error'

        // set options
        opt = opt || {}
        const classRanges = opt.classRanges || defaultClassRanges
        const queryString = opt.queryString || defaultQueryString
        const errorClass = opt.queryString || defaultErrorClass

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
            const height = entry.target.clientHeight
            const width = entry.target.clientWidth
            const ratio = width / height
            let hit = false
            for (let j = 0; j < classRanges.length; ++j) {
              const range = classRanges[j]
              if (ratio >= range.min && ratio <= range.max) {
                entry.target.classList.add(range.className)
                hit = true
              } else {
                entry.target.classList.remove(range.className)
              }
            }
            if (hit === false) {
              entry.target.classList.add(errorClass)
            } else {
              entry.target.classList.remove(errorClass)
            }
          }
        }
      }
      return StretchedBgImages
    }
  )
)
