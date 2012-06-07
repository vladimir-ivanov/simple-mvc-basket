/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 window: false
 */


/**
 * Singleton may as well work fine here, as it is not a reusable class - used function for demo purposes
 */
Global.BasketController = function () {
    this.__basketItemsModel = new Global.BasketItemsModel();
    this.__basketView = new Global.BasketView(this.__basketItemsModel);
    this.__basketView.render();
};

Global.BasketController.prototype = {

    run: function () {
        var self = this, // better way to do this is possible e.g. using _.bind() external underscore js library

            bindToModelsChanges = function () {
                var updateCounterEl = function () {
                    var itemsCount = self.__basketItemsModel.count();
                    self.__basketView.updateCounter(itemsCount);
                };

                self.__basketItemsModel.bind('add', function () {
                    updateCounterEl();
                });

                self.__basketItemsModel.bind('remove', function () {
                    updateCounterEl();
                });
                //TODO - implement view to model changes bindings
            };

        bindToModelsChanges();
    }
};



