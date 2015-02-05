App.controller('UserCtrl', function($scope, UserFactory) {
    $scope.init = function() {
        $scope.users = UserFactory.list();
    }

    $scope.addUser = function() {
    }

    $scope.removeUser = function() {
    }

    $scope.editUser = function() {
    }
});