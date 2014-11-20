/**
 * Created by rodrigue.moulin on 20.11.2014.
 */

(function () {
    'use strict';

    angular
        .module('ticketstracker.events.filters')
        .filter('teamname', teamname);

    function teamname() {

        return function (input) {
            var separator = ' - ';
            return input.substring(input.indexOf(separator) + separator.length, input.length);
        }
    }
})();
