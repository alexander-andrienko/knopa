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
        controller: 'activityCtrl',
        templateUrl: 'html/activity.tmpl.html'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
});

App.factory('activityService', function($http) {
    var _createActivity = function(name) {
        return name
    };
    var _getActivity = function(id) {
        return {
            name: 'Belka',
            container: {
                name: '',
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
        }
    };
    return {
        createActivity: _createActivity,
        getActivity: _getActivity
    }
});