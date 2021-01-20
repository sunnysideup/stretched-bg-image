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
      const StretchedBgImages = function () {
        // function apply () {
        //   opt = opt || {}
        //
        //   // private data
        //   var foo = opt.foo || 'default'
        //
        //   // API/data for end-user
        //   return {
        //     foo: foo,
        //     ...
        //   }
        //
        //   // private functions
        //   function parse () {
        //     ...
        //   }
        //   // do nothing
        // }
        // const defaultCssInjected = false

        // /**
        //      * Searches all css rules and setups the event listener to all elements with element query rules..
        //      */
        // this.init = function () {
        //   apply()
        // }
        //
        // this.update = function () {
        //   this.init()
        // }
        //
        // this.setRanges = function (classRanges) {
        //   this.classRanges = classRanges
        // }
      }

      // StretchedBgImages.update = function () {
      //   StretchedBgImages.instance.update()
      // }
      //
      // StretchedBgImages.init = function () {
      //   if (!StretchedBgImages.instance) {
      //     StretchedBgImages.instance = new StretchedBgImages()
      //   }
      //
      //   StretchedBgImages.instance.init()
      // }

      // const domLoaded = function (callback) {
      //   /* Mozilla, Chrome, Opera */
      //   if (document.addEventListener) {
      //     document.addEventListener('DOMContentLoaded', callback, false)
      //   } else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
      //     /* Safari, iCab, Konqueror */
      //     var DOMLoadTimer = setInterval(function () {
      //       if (/loaded|complete/i.test(document.readyState)) {
      //         callback()
      //         clearInterval(DOMLoadTimer)
      //       }
      //     }
      //     , 10)
      //   } else {
      //     /* Other web browsers */
      //     window.onload = callback
      //   }
      // }
      //
      // StretchedBgImages.listen = function () {
      //   domLoaded(StretchedBgImages.init)
      // }

      return StretchedBgImages
    }
  )
)
