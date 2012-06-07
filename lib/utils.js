/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 window: false,
 Utils: false,
 document: false
 */
var Utils = {

    getElementById: function (id) {
        return document.getElementById(id);
    },

    getElementByName: function (name) {
        return document.getElementById(name);
    },

    extend: function (obj) {
        var sourceObject = Array.prototype.slice.call(arguments, 1);

        sourceObject.forEach(function (source) {
            for (var prop in source) {
                obj[prop] = source[prop];
            }
        });

        return obj;
    },

    makeDomEl: function (tagName, attributes, content) {
        var el = document.createElement(tagName);

        if (attributes) {
            for (attribute in attributes) {
                if (attributes.hasOwnProperty(attribute)) {
                    el.setAttribute(attribute, attributes[attribute]);
                }
            }
        }

        if (content !== undefined) {
            el.innerHTML = content;
        }

        return el;
    },

    removeDomEl: function (domEl) {
       if (domEl && domEl.parentNode) {
           domEl.parentNode.removeChild(domEl);
       }
    }
};




