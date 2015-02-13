App.factory('ActivityFactory', function($rootScope) {
    var activities = [
        {
            id: 1,
            name: 'Heidy',
            status: Constants.Status.IN_PROGRESS,
            createdAt: 1423178435286,
            createdBy: 'Knopa Administrator',
            children: [
                {
                    id: 5,
                    name: ' blue room',
                    status: Constants.Status.COMPLETED,
                    createdAt: 1423178435286,
                    createdBy: 'Knopa Administrator',
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
                    ]
                },
                {
                    id: 6,
                    name: 'yellow room',
                    status: Constants.Status.IN_PROGRESS,
                    createdAt: 1423178435286,
                    createdBy: 'Knopa Administrator',
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
                    ]
                }
            ]

        },
        {
            id: 2,
            name: 'Sign payroll',
            status: Constants.Status.NOT_STARTED,
            createdAt: 1423178435286,
            createdBy: 'Knopa Administrator',
            children: [
                {
                    id: 5,
                    name: ' blue room',
                    status: Constants.Status.COMPLETED,
                    createdAt: 1423178435286,
                    createdBy: 'Knopa Administrator',
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
                    ]
                },
                {
                    id: 6,
                    name: 'yellow room',
                    status: Constants.Status.IN_PROGRESS,
                    createdAt: 1423178435286,
                    createdBy: 'Knopa Administrator',
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
                    ]
                }
            ]

        },
        {
            id: 3,
            name: 'Odd money for birthday',
            status: Constants.Status.IN_PROGRESS,
            createdAt: 1423178435286,
            createdBy: 'Knopa Administrator',
            children: [
                {
                    id: 5,
                    name: ' blue room',
                    status: Constants.Status.COMPLETED,
                    createdAt: 1423178435286,
                    createdBy: 'Knopa Administrator',
                    children: [
                        {
                            name: 'Mykolay',
                            isComplete: false
                        },
                        {
                            name: 'Alexey',
                            isComplete: false
                        },
                        {
                            name: 'Alexandr',
                            isComplete: false
                        },
                        {
                            name: 'Oleksandr',
                            isComplete: false
                        }
                    ]
                },
                {
                    id: 6,
                    name: 'yellow room',
                    status: Constants.Status.IN_PROGRESS,
                    createdAt: 1423178435286,
                    createdBy: 'Knopa Administrator',
                    children: [
                        {
                            name: 'Mykolay',
                            isComplete: false
                        },
                        {
                            name: 'Alexey',
                            isComplete: false
                        },
                        {
                            name: 'Alexandr',
                            isComplete: false
                        },
                        {
                            name: 'Oleksandr',
                            isComplete: false
                        }
                    ]
                }
            ]

        },
        {
            id: 4,
            name: 'Friday pizza',
            status: Constants.Status.COMPLETED,
            createdAt: 1423178435286,
            createdBy: 'Knopa Administrator',
            children: [
                {
                    id: 5,
                    name: ' blue room',
                    status: Constants.Status.COMPLETED,
                    createdAt: 1423178435286,
                    createdBy: 'Knopa Administrator',
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
                    ]
                },
                {
                    id: 6,
                    name: 'yellow room',
                    status: Constants.Status.IN_PROGRESS,
                    createdAt: 1423178435286,
                    createdBy: 'Knopa Administrator',
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
                    ]
                }
            ]
        },
        {
            id: 5,
            name: ' blue room',
            status: Constants.Status.COMPLETED,
            createdAt: 1423178435286,
            createdBy: 'Knopa Administrator',
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
            ]
        },
        {
            id: 6,
            name: 'yellow room',
            status: Constants.Status.IN_PROGRESS,
            createdAt: 1423178435286,
            createdBy: 'Knopa Administrator',
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
            ]
        }
    ];

    function _list() {
        if (angular.isUndefined($rootScope.activities))
            $rootScope.activities = [];

        angular.forEach(activities, function(activity) {
            $rootScope.activities.push(activity);
        });
        return activities;
    }
    var _getById = function(id) {
        var result = {};
        console.log($rootScope.activities);
        angular.forEach($rootScope.activities, function(activity) {
            if (activity.id == id) result = activity;
        });

        return result;
    };

    return {
        list: _list,
        getById: _getById
    };
});
