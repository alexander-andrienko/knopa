App = angular.module('app',['ngRoute']);

App.config(function($routeProvider) {
    $routeProvider.when('/home', {
        controller: 'homeCtrl',
        templateUrl: 'home.tmpl.html'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
});
