// Ionic Starter App

(function () {
    'use strict';

    angular
        .module('ticketstracker', [
            'ionic',
            'ticketstracker.routes',
            'ticketstracker.config',
            'ticketstracker.events',
            'ticketstracker.authentication'
        ]);

    angular
        .module('ticketstracker.config', []);

    angular
        .module('ticketstracker.routes', []);

    angular
        .module('ticketstracker')
        .run(run)
        .constant('FIREBASE_URL', 'https://fcb.firebaseio.com/');

    run.$inject = ['$ionicPlatform'];

    function run($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }
})();

