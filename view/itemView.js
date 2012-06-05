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
    /**
     * @desc - used a function, so it could be reused in multiple places - one view for each basket item
     */
    Gorkana.ItemView = function (description) {
        this.__description = description;
        this.__el = $('<li></li>');
    };

    Gorkana.ItemView.prototype = {
        /**
         * jQuery Elements for reference
         */
        __el: $(),
        __description: '',
        __deleteButtonEl: $(),

        render: function () {
            this.__renderDeleteButtonEl();
            var descriptionEl = $('<span name = "' + this.__description + '">' + this.__description + '</span>');

            this.__el.append(this.__deleteButtonEl);
            this.__el.append(descriptionEl);

            return this.__el;
        },

        /**
         * private methods
         */
        __renderDeleteButtonEl: function () {
            var self = this;
            this.__deleteButtonEl = $('<input name ="deleteItem" data-item= "' + this.__description + '" type = "submit" value="delete"/>');
            this.__deleteButtonEl.click(function (event) {
                event.preventDefault();
                self.__el.detach();
                self.trigger('remove', self.__description);
            });
        }
    };

    $.extend(Gorkana.ItemView.prototype, Events);
});