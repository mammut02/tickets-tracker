/**
 * Created by rod on 19/11/14.
 */

(function () {
    'use strict';

    angular
        .module('ticketstracker.events.controllers')
        .controller('EventsController', EventsController);

    EventsController.$inject = ['Events'];

    function EventsController(Events) {
        var vm = this;

        vm.events = [];

        activate();

        function activate(){
            console.log('activate');
            vm.events = Events.all;
        }

    }
})();
