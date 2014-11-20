/**
 * Created by rod on 19/11/14.
 */

(function () {
    'use strict';

    angular
        .module('ticketstracker.authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'Auth', 'user'];

    function LoginController($location, Auth, user) {
        var vm = this;
        vm.login = login;

        activate();

        function activate() {
            if (Auth.signedIn()) {
                $location.path('/');
            }
        }

        function login(){
            Auth.login(vm.user).then(function(){
                $location.path('/');
            })
        }
    }
})();
