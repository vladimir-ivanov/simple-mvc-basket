/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 $: false,
 window: false,
 Utils: false,
 */


Global.ItemCountView = function () {
    this.__el = Utils.makeDomEl('div');
};

Global.ItemCountView.prototype = {
    /**
     * jQuery Elements for reference
     */
    __el: Utils.makeDomEl('div'),
    __counterEl: Utils.makeDomEl('span', {'name': 'itemCounter'}, '0'),

    render: function () {
        var counterWrapper = Utils.makeDomEl('div', {}, 'items in list: ');

        counterWrapper.appendChild(this.__counterEl);
        this.__el.appendChild(counterWrapper);

        return this.__el;
    },

    updateCounter: function (count) {
        this.__counterEl.innerHTML = count;
    }
};
