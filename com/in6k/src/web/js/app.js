App = angular.module('app',['ngRoute']);

App.config(function($routeProvider) {
    $routeProvider.when('/home', {
        controller: 'homeCtrl',
        templateUrl: 'html/home.tmpl.html'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
});
