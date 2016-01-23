var app = angular.module('AddressBook', []);

app.controller('LiCtrl', function($scope, $http) {
    
    $http.get('addresses.json')
       .then(function(res){
          $scope.addresses = res.data;
        });
    
});