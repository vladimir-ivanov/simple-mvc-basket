/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 window: false,
 Utils: false,
 */

/**
 * @desc - used a function, so it could be reused in multiple places - one view for each basket item
 */
Global.ItemView = function (description) {
    this.__description = description;
    this.__el = Utils.makeDomEl('li');
};

Global.ItemView.prototype = {
    /**
     * jQuery Elements for reference
     */
    __el: Utils.makeDomEl('div'),
    __description: '',
    __deleteButtonEl: Utils.makeDomEl('div'),

    render: function () {
        this.__renderDeleteButtonEl();
        var descriptionEl = Utils.makeDomEl('span', {'name': this.__description}, this.__description);
        this.__el.appendChild(this.__deleteButtonEl);
        this.__el.appendChild(descriptionEl);

        return this.__el;
    },

    /**
     * private methods
     */
    __renderDeleteButtonEl: function () {
        var self = this;
        this.__deleteButtonEl = Utils.makeDomEl('input', {
            'name': 'deleteItem',
            'type': 'submit',
            'value': 'delete',
            'data-item': this.__description
        }, this.__description);

        this.__deleteButtonEl.addEventListener('click', function (event) {
            event.preventDefault();
            Utils.removeDomEl(self.__el);
            self.trigger('remove', self.__description);
        });
    }
};

Utils.extend(Global.ItemView.prototype, Events);
