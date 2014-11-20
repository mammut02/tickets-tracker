/**
 * Created by rod on 19/11/14.
 */

(function(){
    'use strict';

    angular
        .module('ticketstracker.authentication.services')
        .factory('Auth', Auth);

    Auth.$inject = ['$firebaseAuth', 'FIREBASE_URL', '$rootScope'];

    function Auth($firebaseAuth, FIREBASE_URL, $rootScope){

        var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(ref);

        var Auth = {
            login: login,
            logout: logout,
            resolveUser: resolveUser,
            signedIn: signedIn,
            user: {}
        };

        return Auth;

        function login(user){
            return auth.$authWithPassword(user);
        }

        function logout(){
            return auth.$unauth();
        }

        function resolveUser(){
            return auth.$getAuth();
        }

        function signedIn() {
            return !!Auth.user.provider;
        }

        $rootScope.$on('$firebaseAuth:login', function(event, user){
            console.log('logged in');
            angular.copy(user, Auth.user);
        });

        $rootScope.$on('$firebaseAuth:logout', function(event, user){
            console.log('logged in');
            angular.copy({}, Auth.user);
        });
    }
})();
