'use strict';

(function (root, factory) {
    // AMD (Register as an anonymous module)
    if (typeof define === 'function' && define.amd) {
        define([root], factory);
    }
    // Browser globals
    else {
        root.ResizeHandler = factory(root);
    }
}(this, function (root) {

    /**
     * @constructor
     */
    function ResizeHandler() {
        this.listeners = [];

        root.addEventListener('resize', this.onResize.bind(this));
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
        }
    });

    /**
     * @returns {ResizeHandler}
     */
    ResizeHandler.prototype.onResize = function () {
        this.listeners.forEach(function (listener) {
            listener();
        });

        return this;
    };

    /**
     * @param {Function} callback
     * @returns {ResizeHandler}
     */
    ResizeHandler.prototype.register = function (callback) {
        if ((callback instanceof Function) === false) {
            throw new TypeError('Callback must be a function.');
        }

        this.listeners.push(callback);

        return this;
    };

    /**
     * @param {Function} callback
     * @returns {ResizeHandler}
     */
    ResizeHandler.prototype.unregister = function (callback) {
        if ((callback instanceof Function) === false) {
            throw new TypeError('Callback must be a function.');
        }

        this.listeners = this.listeners.filter(function (listener) {
            return listener !== callback;
        });

        return this;
    };

    return new ResizeHandler();
}));
