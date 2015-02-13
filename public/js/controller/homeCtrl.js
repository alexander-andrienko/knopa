App.controller('homeCtrl', function($scope, $rootScope) {
    $scope.init = function() {
        $scope.activities = $rootScope.activities;
    };

    $scope.getStatusLabel = function(status) {
        var status = Constants.Status.getStatusById(status.id);
        return status.label;
    }
});

