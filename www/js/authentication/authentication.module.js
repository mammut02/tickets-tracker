/**
 * Created by rod on 19/11/14.
 */

(function () {
    'use strict';

    angular
        .module('ticketstracker.authentication', [
            'ticketstracker.authentication.controllers',
            'ticketstracker.authentication.services'
        ]);

    angular
        .module('ticketstracker.authentication.controllers', []);

    angular
        .module('ticketstracker.authentication.services', ['ngCookies']);
})();
