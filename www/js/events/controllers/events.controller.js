/**
 * Created by rod on 19/11/14.
 */

(function () {
    'use strict';

    angular
        .module('ticketstracker.events.controllers')
        .controller('EventsController', EventsController);

    EventsController.$inject = ['$scope', '$location', 'Events', 'Auth', '$ionicLoading', '$ionicModal'];

    function EventsController($scope, $location, Events, Auth, $ionicLoading, $ionicModal) {
        var vm = this;
        vm.change = change;
        vm.openModal = openModal;
        vm.closeModal = closeModal;
        vm.events = [];

        activate();

        function activate() {
            if (!Auth.signedIn()) {
                //$location.path('/');
                $ionicModal.fromTemplateUrl('templates/login.html', {
                    scope: vm,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    console.log(modal);
                    vm.modal = modal;
                    console.log(vm.modal);
                });

                vm.openModal();
            }
            else {
                $ionicLoading.show({
                    template: '<i class="ion-loading-c"></i><br>Loading...'
                });

                vm.events = Events.all;
                vm.events.$watch(function (event) {
                    //console.log(event);
                });

                vm.events.$loaded()
                    .then(function (theList) {
                        $ionicLoading.hide();
                    })
                    .catch(function (error) {
                        console.log("Error:", error);
                    });

                vm.$on('$destroy', function () {
                    console.log('destroy');
                    vm.modal.remove();
                });
            }
        }

        function change(event) {
            Events.track(event);
        }

        function openModal() {
            console.log('openModal');
            vm.modal.show();
        };

        function closeModal() {
            console.log('closeModal');
            vm.modal.hide();
        };
    }
})();
