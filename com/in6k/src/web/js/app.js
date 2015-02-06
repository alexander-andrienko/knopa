App = angular.module('app',['ngRoute', 'mgcrea.ngStrap', 'ngSanitize']);

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
        controller: '',
        templateUrl: 'html/activity.tmpl.html'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
});

App.factory('activityService', function($http, $location, $rootScope) {
    var _createActivity = function(activity) {
        if(!$rootScope.activities)
            $rootScope.activities = [];
        $rootScope.activities.push(activity);
        $location.url('/');
    };
    var _getActivity = function(id) {
        return {
            name: 'Belka',
            status: 'inprogress',
            children: [
                {
                    name: 'blue room',
                    children: [
                        {
                            name: 'Mykolay',
                            isComplete: true
                        },
                        {
                            name: 'Alexey',
                            isComplete: true
                        },
                        {
                            name: 'Alexandr',
                            isComplete: true
                        },
                        {
                            name: 'Oleksandr',
                            isComplete: true
                        }
                    ],
                    status: 'complete'
                },
                {
                    name: 'yellow room',
                    children: [
                        {
                            name: 'Mykolay',
                            isComplete: true
                        },
                        {
                            name: 'Alexey',
                            isComplete: true
                        },
                        {
                            name: 'Alexandr',
                            isComplete: false
                        },
                        {
                            name: 'Oleksandr',
                            isComplete: false
                        }
                    ],
                    status: 'inprogress'
                }
            ]

        }
    };
    return {
        createActivity: _createActivity,
        getActivity: _getActivity
    }
});