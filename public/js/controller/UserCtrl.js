App.controller('UserCtrl', function($scope, UserFactory,  $modal, $log, $rootScope) {
    $scope.init = function() {
        $scope.users = UserFactory.list;
    }

    $scope.removeUser = function() {
    }

    $scope.editUser = function(user) {
        $rootScope.user = user;
    }

    $scope.open = function (size, user) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                user: function () {
                    return user;
                }
            }
        });

        modalInstance.result.then(function (user) {
            $scope.users.push(user);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.deleteUser = function(index){
        $scope.users.splice(index, 1);
    }

    $scope.edit = function (size, user) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent1.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                user: function () {
                    return user;
                }
            }
        });

    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
App.controller('ModalInstanceCtrl', function ($scope, $modalInstance, user) {
    $scope.user = user;
    $scope.addUser = function(user) {
        $modalInstance.close(user);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.editUser = function(user){
        $modalInstance.close(user)

    }
});