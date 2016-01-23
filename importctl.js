angular.module('app').controller('ImportController', function ($scope, $state, Address) {
    $scope.addresses = [];
    $.get({
        url: 'addresses.json',
        success: function (res) {
            res.forEach(function (item, index) {
                
             /*   var update = {
                    streetnumber: item.number,
                    street: item.street,
                    city: item.city,
                    postcode: item.postcode,
                    firstname: item.firstname,
                    lastname: item.lastname,
                    clientId: 1
                };*/
               // console.log(update);
                Address
                    .create(item)
                    .$promise.then();
            });
        }
    });
});