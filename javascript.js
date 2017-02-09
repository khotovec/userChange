/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

$(document).ready(function main() {
    "use strict";
    var iframe = document.getElementsByTagName('iframe') [0],
    specialLink = iframe.getElementById('customLink');
    specialLink.style.display = 'none';
});