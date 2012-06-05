/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 $: false,
 window: false,
 jQuery: false,
 */

$(document).ready(function () {
    var controller = new Gorkana.BasketController();
    controller.run();
});