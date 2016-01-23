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