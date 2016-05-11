'use strict';

(function (factory) {
    // AMD (Register as an anonymous module)
    if (typeof define === 'function' && define.amd) {
        define([window], factory);
    }
    // Browser globals
    else {
        window.ResizeHandler = factory(window);
    }
}(function (global) {

    /**
     * @constructor
     */
    function ResizeHandler() {
        this.listeners = [];

        global.addEventListener('resize', this.onResize.bind(this));
    }

    // proto
    ResizeHandler.prototype = Object.create(Object.prototype, {
        /**
         * @var Function[]
         */
        listeners: {
            value: null,
            enumerable: false,
            configurable: false,
            writable: true
        },

        /**
         * @param {Function} callback
         * @returns {ResizeHandler}
         */
        onResize: {
            value: function() {
                this.listeners.forEach(function(listener) {
                    listener();
                });

                return this;
            },
            enumerable: false,
            configurable: false,
            writable: false
        },

        /**
         * @param {Function} callback
         * @returns {ResizeHandler}
         */
        register: {
            value: function(callback) {
                if ((callback instanceof Function) === false) {
                    throw new TypeError('Callback must be a function.');
                }

                this.listeners.push(callback);

                return this;
            },
            enumerable: true,
            configurable: false,
            writable: false
        },

        /**
         * @param {Function} callback
         * @returns {ResizeHandler}
         */
        unregister: {
            value: function(callback) {
                if ((callback instanceof Function) === false) {
                    throw new TypeError('Callback must be a function.');
                }

                this.listeners = this.listeners.filter(function(listener) {
                    return listener !== callback;
                });

                return this;
            },
            enumerable: true,
            configurable: false,
            writable: false
        }
    });

    return new ResizeHandler();
}));