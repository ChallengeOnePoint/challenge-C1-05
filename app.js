var app = angular.module('AddressBook', []);

app.controller('LiCtrl', function($scope, $http) {
    
    $http.get('http://cdn.bemyapp.com/files/2016/one-point/fixtures/challenge-full-stack/addressBook.json')
       .then(function(res){
          $scope.addresses = res.data;
        });
    
});