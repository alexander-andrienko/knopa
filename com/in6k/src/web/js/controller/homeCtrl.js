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
            $scope.activity = {
                children: []
            }
        }
        else {
            $scope.activity = activityService.getActivity($route.current.params.id);

        }
    };

    $scope.remove = function(parent, index) {
//        parent.children = parent.children.filter(function(el) { return el == child });
        parent.children = $scope.$parent.activity.children.splice(index,1);
    };

    $scope.selectActivity = function(activity) {
        $scope.activity.selectedActivity = activity;
    };

    $scope.addSubActivity = function(container) {
        /*if (!container.newStep || container.newStep.length <= 0)
            return;
*/
        var step = {name: container.newStep, children: []};
        container.children.push(step);
    };

    $scope.defineSteps = function(activity) {
        $scope.editMode.steps = !$scope.editMode.steps;
        $scope.editMode.users = false;
    }

    $scope.assignUsers = function(activity) {
        $scope.editMode.steps = false;
        $scope.editMode.users = !$scope.editMode.users;
    }
});