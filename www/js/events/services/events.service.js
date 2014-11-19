/**
 * Created by rod on 19/11/14.
 */

(function () {
    'use strict';

    angular
        .module('ticketstracker.events.services')
        .factory('Events', Events);

    Events.$inject = ['$firebase', 'FIREBASE_URL'];

    function Events($firebase, FIREBASE_URL) {

        var ref = new Firebase(FIREBASE_URL);
        var list = $firebase(ref.child('events')).$asArray();

        list.$watch(function (event) {
            console.log(event);
        });

        list.$loaded()
            .then(function (theList) {
                console.log('Events loaded');
            })
            .catch(function (error) {
                console.log("Error:", error);
            });

        var Events = {
            all: list
        };

        return Events;


    }
})();
