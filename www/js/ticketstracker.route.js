/**
 * Created by rod on 19/11/14.
 */

(function () {
    'use strict';

    angular
        .module('ticketstracker.routes')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    /**
     * @name config
     * @desc Define valid application routes
     */
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            .state('tab.events', {
                url: '/events',
                views: {
                    'tab-events': {
                        templateUrl: 'templates/tab-events.html',
                        controller: 'EventsController as vm',
                    }
                }
            });
        /*
         .state('tab.dash', {
         url: '/dash',
         views: {
         'tab-dash': {
         templateUrl: 'templates/tab-dash.html',
         controller: 'DashCtrl'
         }
         }
         })

         .state('tab.friends', {
         url: '/friends',
         views: {
         'tab-friends': {
         templateUrl: 'templates/tab-friends.html',
         controller: 'FriendsCtrl'
         }
         }
         })
         .state('tab.friend-detail', {
         url: '/friend/:friendId',
         views: {
         'tab-friends': {
         templateUrl: 'templates/friend-detail.html',
         controller: 'FriendDetailCtrl'
         }
         }
         })

         .state('tab.account', {
         url: '/account',
         views: {
         'tab-account': {
         templateUrl: 'templates/tab-account.html',
         controller: 'AccountCtrl'
         }
         }
         });
         */

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/events');
    }
})();


