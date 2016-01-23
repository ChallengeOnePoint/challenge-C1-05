angular.module('app').controller('ImportController', function ($scope, $state, $modal, $htpp, Address) {
    $scope.addresses = [];
    $http({
        method: 'GET',
        url: 'bit.ly/23iM1Gh'
    }).then(function (res) {
        console.log(res);
        $scope.addresses = res;
    })
});