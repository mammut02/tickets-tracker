/**
 * Created by rod on 19/11/14.
 */

(function () {
    'use strict';

    angular
        .module('ticketstracker.events.controllers')
        .controller('EventsController', EventsController);

    EventsController.$inject = ['$scope', 'Events', 'Auth', '$ionicLoading', '$ionicModal', '$cordovaLocalNotification'];

    function EventsController($scope, Events, Auth, $ionicLoading, $ionicModal, $cordovaLocalNotification) {
        var vm = this;
        vm.change = change;
        vm.openModal = openModal;
        vm.closeModal = closeModal;
        vm.events = [];

        $scope.login = login;
        $scope.user = {
            email: 'rodrigue.dev@gmail.com',
            password: 'test'
        };

        activate();

        function activate() {
            if (!Auth.signedIn()) {
                $ionicModal.fromTemplateUrl('templates/login.html', {
                    scope: $scope,
                    animation: 'slide-in-up',
                    backdropClickToClose: false,
                    focusFirstInput: true,
                    hardwareBackButtonClose: false
                }).then(function (modal) {
                    vm.modal = modal;
                    vm.openModal();
                });
            }
            else {
                loadData();
            }
        }

        function change(event) {
            Events.track(event);
        }

        function openModal() {
            vm.modal.show();
        }

        function closeModal() {
            vm.modal.hide();
        }

        function loadData() {
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
        }

        function login(user) {
            Auth.login(user).then(function (authData) {
                console.log('login');
                closeModal();
                loadData();
                addNotification();
            }, function (error) {
                console.log(error);
            })
        }

        function addNotification() {

            window.plugin.notification.local.hasPermission(function (granted) {
                var now = new Date().getTime();
                var milliseconds = (now + 10 * 1000);
                var _10_seconds_from_now = new Date(milliseconds);

                $cordovaLocalNotification.add({
                    id: '1',
                    message: 'id ' + milliseconds,
                    title: 'Test',
                    date: _10_seconds_from_now
                }).then(function () {
                    console.log('callback for adding background notification');
                });
            });

        }

        $scope.$on('notification_added', function (event, id, state, json) {
            console.log('notification ADDED, id: ' + id + ' state:' + state + ' json:' + json);
        });

        $scope.$on('notification_triggered', function (event, id, state, json) {
            console.log('notification TRIGGERED, id: ' + id + ' state:' + state + ' json:' + json);

        });

        $scope.$on('$destroy', function () {
            console.log('destroy');
            vm.modal.remove();
        });
    }
})();
