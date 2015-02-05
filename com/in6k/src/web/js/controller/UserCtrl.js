App.controller('UserCtrl', function($scope, UserFactory) {
    $scope.init = function() {
        $scope.users = UserFactory.list();
    }
});