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
     * @desc - used a function, so it could be reused in multiple places
     */
    Gorkana.BasketView = function (model) {
        var self = this;
        this.__el = $('<form></form>');
        this.__model = model; // reference to the model object to update it
        this.__addItemInputEl = $('<input name ="addItemInput" type = "text" />');
        this.__addItemButtonEl = $('<input name ="addItemButton" type = "submit" value="Add"/>');
        this.__itemsListWrapperEl = $('<ul></ul>');

        this.__model.bind('add', function (description) {
            var item = new Gorkana.ItemView(description);
            self.__itemsListWrapperEl.append(item.render());

            item.bind('remove', function (description) {
                self.__model.remove(description);
            });
        });

        this.__model.bind('remove', function (description) {
            self.__itemsListWrapperEl.find('name="' + description + '"').detach();
        });
    };

    Gorkana.BasketView.prototype = {
        __id: '#stage', // could be replaced with const if older browsers can be ignored
        /**
         * jQuery Elements for reference
         */

        render: function () {
            this.__itemsCounterEl = new Gorkana.ItemCountView();
            this.__bindEvents();

            this.__el.append(this.__addItemInputEl);
            this.__el.append(this.__addItemButtonEl);
            this.__el.append(this.__itemsListWrapperEl);
            this.__el.append(this.__itemsCounterEl.render());

            $(this.__id).append(this.__el);
        },

        //decouple itemCountView from the controller
        updateCounter: function (itemsCount) {
            this.__itemsCounterEl.updateCounter(itemsCount);
        },

        /**
         * private methods
         */

        __bindEvents: function () {
            var self = this;   // more clever way to do this could be uses e.g. using underscore.js _.bind method
            this.__addItemButtonEl.click(function (event) {
                event.preventDefault();
                self.__model.add({description: self.__addItemInputEl.val()});
            });
        }
    };
});