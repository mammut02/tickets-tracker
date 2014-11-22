// Ionic Starter App

(function () {
    'use strict';

    angular
        .module('ticketstracker', [
            'ionic',
            'ngCordova',
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

    run.$inject = ['$ionicPlatform', '$rootScope'];

    function run($ionicPlatform, $rootScope) {
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

            window.plugin.notification.local.promptForPermission();

            /*
            window.plugin.notification.local.onadd = function (id, state, json) {
                console.log('onadd ' + id);
                $rootScope.$broadcast('notification_added', id, state, json);
            };
            window.plugin.notification.local.onclick = function (id, state, json) {
                console.log('onclick');
                $rootScope.$broadcast('notification_clicked', id, state, json);
            };
            window.plugin.notification.local.oncancel = function (id, state, json) {
                console.log('oncancel');
                $rootScope.$broadcast('notification_cancelled', id, state, json);
            };
            window.plugin.notification.local.ontrigger = function (id, state, json) {
                console.log('ontrigger');
                $rootScope.$broadcast('notification_triggered', id, state, json);
            };
            */
        });
    }
})();

