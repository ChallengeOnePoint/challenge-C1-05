<<<<<<< HEAD
angular
    .module('app', [
    'ng',
    'ui.router',
    'lbServices'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
         /*   .state('clients', {
                url: '/clients',
                templateUrl: 'views/clients.html',
                controller: 'ClientsController'
            })*/
            .state('import', {
            url:' /import',
            templateUrl: 'import.html',
            controller: 'ImportController'
        })
        $urlRouterProvider.otherwise('/');
    }])
=======
var app = angular.module('AddressBook', []);

app.controller('LiCtrl', function($scope, $http) {
    
    $http.get('addresses.json')
       .then(function(res){
          $scope.addresses = res.data;
        });
    
    $scope.setCurrent = function(x) {
          $scope.current = x;
    };
    
});
>>>>>>> master
