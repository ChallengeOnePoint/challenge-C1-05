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
            url: ' /import',
            templateUrl: 'import.html',
            controller: 'ImportController'
        })
        $urlRouterProvider.otherwise('/');
    }])
    .controller('LiCtrl', function ($scope, Address) {

        Address.find().$promise.then(function (results) {
            $scope.addresses = results;
        });

        $scope.setCurrent = function (x) {
            $scope.current = x;
        };

    });