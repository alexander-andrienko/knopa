App.controller('homeCtrl', function($scope, $rootScope) {
    $scope.init = function() {
        $scope.activities = $rootScope.activities;
    };

    $scope.getStatusLabel = function(status) {
        var status = Constants.Status.getStatusById(status.id);
        return status.label;
    }
});

App.controller('activityCtrl', function($scope, $route, $rootScope, activityService, UserFactory) {
    $scope.editMode = {
        steps: false,
        users: false
    };

    $scope.init = function() {
        if (!$route.current.params.activityId) {
            $scope.isCreate = true;
        if(!$scope.activity)
            $scope.activity = {
                users: [],
                children: [],
                usersTmpl: angular.copy(UserFactory.list)
            }
        }
        else {
            $scope.activity = activityService.getActivity(parseInt($route.current.params.activityId));
        }
    };

    $scope.remove = function(parent, index) {
        parent.children.splice(index, 1);
    };

    $scope.selectActivity = function(activity) {
        $scope.activity.selectedActivity = activity;
    };

    $scope.addSubActivity = function(container) {
        var step = {
            name: '',
            children: [],
            users: [],
            usersTmpl: angular.copy(UserFactory.list),
            status: Constants.Status.NOT_STARTED,
            createdAt: new Date().getTime(),
            createdBy: 'Knopa Administrator'
        };
        container.children.push(step);
    };

    $scope.create = function(activity) {
        activity.id =  angular.isDefined($rootScope.activities) ? $rootScope.activities[$rootScope.activities.length-1].id + 1 : 1;
        activity.status = Constants.Status.NOT_STARTED;
        activity.createdAt = new Date().getTime();
        activity.createdBy = 'Knopa Administrator';
        activityService.createActivity(activity);
    };

    $scope.finish = function(activity) {
        activity.isComplete = true;
        angular.forEach(activity.children, function(child) {
            $scope.finish(child);
        });
        $scope.refreshCompletion($scope.activity);
    };

    $scope.userComplete = function(activity, user) {
        user.isComplete = true;
        $scope.refreshCompletion($scope.activity);
    };

    $scope.refreshCompletion = function(activity) {
        activity.children.forEach(function(child) {
            $scope.refreshCompletion(child);
        });
        var count = 0;
        count += activity.users.filter(function(user) {
            return user.isComplete == true;
        }).length;
        count += activity.children.filter(function(child) {
            return child.isComplete == true;
        }).length;
        var totalCount = activity.users.length + activity.children.length;
        if (!activity.isComplete)
            activity.isComplete = count == (activity.users.length + activity.children.length);

    };

    $scope.completedCount = function(activity) {
        var count = 0;
        count += activity.users.filter(function(user) {
            return user.isComplete == true;
        }).length;
        count += activity.children.filter(function(child) {
            return child.isComplete == true;
        }).length;
        return count;
    };

    $scope.assignUsers = function(activity) {
        activity.editMode = activity.editMode || {users: false};
        activity.editMode.users = !activity.editMode.users;
    }

    $scope.assignUser = function(user, activity) {
        user.isAssigned = !user.isAssigned;
        if (!activity.users) activity.users = [];
        if (user.isAssigned) activity.users.push(user);
        else {
            angular.forEach(activity.users, function(activityUser, ind) {
                if (activityUser.name == user.name) activity.users.splice(ind,1);
            });
        }
    }
});