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

        var Events = {
            all: list,
            track: track
        };

        return Events;

        function track(event) {
            $firebase(ref.child('events').child(event.$id)).$update({tracked: event.tracked});
        }
    }
})();
