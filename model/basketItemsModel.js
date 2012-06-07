/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 window: false,
 Utils: false
 */


//TODO - implement and bind the view to its changes to update the values of the view
Global.BasketItemsModel = function () {
};

Global.BasketItemsModel.prototype = {

    __items: {},

    add: function (item) {
        var description = item.description;

        if (!this.__items[description]) {
            this.__items[description] = item;
            this.trigger('add', description);
        }

    },

    remove: function (description) {
        if (this.__items[description]) {
            delete this.__items[description];
            this.trigger('remove', description);
        }

    },

    count: function () {
        return this.__countProperties(this.__items);
    },

    __countProperties: function (object) {
        var count = 0;

        for (var prop in object) {
            if (object.hasOwnProperty(prop))
                ++count;
        }

        return count;
    }
};

Utils.extend(Global.BasketItemsModel.prototype, Events);

