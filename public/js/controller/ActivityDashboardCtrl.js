App.controller('ActivityDashboardCtrl', function($scope, $routeParams, ActivityFactory) {
    $scope.init = function() {
        $scope.activity = ActivityFactory.getById($routeParams.activityId);
    };
});