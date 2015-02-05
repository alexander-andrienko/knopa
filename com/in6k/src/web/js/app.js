App = angular.module('app',['ngRoute']);

App.config(function($routeProvider) {
    $routeProvider.when('/home', {
        controller: 'homeCtrl',
        templateUrl: 'html/home.tmpl.html'
    });
    $routeProvider.when('/users', {
        controller: 'UserCtrl',
        templateUrl: 'html/user.tmpl.html'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
});
