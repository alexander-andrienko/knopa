App.controller('homeCtrl', function($scope, activityService, $location) {
    $scope.createActivity = function() {
        $location.url("/activity/create")
    }

});

App.controller('activityCtrl', function($scope, $route, activityService, UserFactory) {
    $scope.editMode = {
        steps: false,
        users: false
    };

    $scope.init = function() {
        $scope.users = UserFactory.list;
        if (!$route.current.params.id) {
            $scope.isCreate = true;
        if(!$scope.activity)
            $scope.activity = {
                children: []
            }
        }
        else {
            $scope.activity = activityService.getActivity($route.current.params.id);
        }
    };

    $scope.remove = function(parent, index) {
        parent.children = $scope.$parent.activity.children.splice(index, 1);
    };

    $scope.selectActivity = function(activity) {
        $scope.activity.selectedActivity = activity;
    };

    $scope.addSubActivity = function(container) {
        var step = {name: '', children: []};
        container.children.push(step);
    };

    $scope.create = function(activity) {
        activityService.createActivity(activity);
    };

    $scope.finish = function(activity) {
        activity.isComplete = true;
        angular.forEach(activity.children, function(child) {
            $scope.finish(child);
        });
    };

    $scope.assignUsers = function(activity) {
        $scope.editMode.steps = false;
        $scope.editMode.users = !$scope.editMode.users;
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