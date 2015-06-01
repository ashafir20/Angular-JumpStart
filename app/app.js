(function() {
    
    var app = angular.module('app', ['ngRoute']);
    
    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                controller : 'CustomersController',
                templateUrl : 'app/views/customers.html'
            })
            .otherwise({ redirectTo: '/' });
    });
    
}());
