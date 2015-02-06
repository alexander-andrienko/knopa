App = angular.module('app',['ngRoute', 'mgcrea.ngStrap', 'ngSanitize', 'ui.bootstrap.pagination', 'ui.bootstrap.tpls', 'ui.bootstrap.modal']);

App.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'homeCtrl',
        templateUrl: 'html/home.tmpl.html'
    });
    $routeProvider.when('/home', {
        controller: 'homeCtrl',
        templateUrl: 'html/home.tmpl.html'
    });
    $routeProvider.when('/users', {
        controller: 'UserCtrl',
        templateUrl: 'html/user.tmpl.html'
    });
    $routeProvider.when('/activity/create', {
        controller: 'activityCtrl',
        templateUrl: 'html/activity.tmpl.html'
    });
    $routeProvider.when('/activity/dashboard/:activityId', {
        controller: 'activityCtrl',
        templateUrl: 'html/activity.tmpl.html'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
});

App.filter("pagingFilter", function(){
    return function(input, currentPage, pageSize ){
        return input ? input.slice(currentPage * pageSize, currentPage * ( pageSize + 1 )) : [];
    };
});

App.factory('activityService', function($http, $location, $rootScope) {
    var _createActivity = function(activity) {
        if(!$rootScope.activities)
            $rootScope.activities = [];
        $rootScope.activities.push(activity);
        $location.url('/');
    };
    var _getActivity = function(id) {
        return $rootScope.activities[0];
    };
    return {
        createActivity: _createActivity,
        getActivity: _getActivity
    }
});