/**
 * Created by rod on 19/11/14.
 */

(function () {
    'use strict';

    angular
        .module('ticketstracker.events', [
            'ticketstracker.events.controllers',
            'ticketstracker.events.services',
            'ticketstracker.events.filters'
        ]);

    angular
        .module('ticketstracker.events.controllers', []);

    angular
        .module('ticketstracker.events.services', ['firebase']);

    angular
        .module('ticketstracker.events.filters', []);
})();
