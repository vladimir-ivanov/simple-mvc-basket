/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 $: false,
 window: false,
 jQuery: false,
 */
$(function ($) {

    Gorkana.ItemCountView = function () {
        this.__el = $('<div></div>');
    };

    Gorkana.ItemCountView.prototype = {
        /**
         * jQuery Elements for reference
         */
        __el: $(),
        __counterEl: $('<span name ="itemsCounter">0</span>'),

        render: function () {
            var counterWrapper = $('<div> items in list</div>');

            counterWrapper.prepend(this.__counterEl);
            this.__el.append(counterWrapper);

            return this.__el;
        },

        updateCounter: function (count) {
           this.__counterEl.html(count);
        }
    };
});