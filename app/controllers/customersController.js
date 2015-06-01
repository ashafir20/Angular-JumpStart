//option 1
/*(function(){
    //using a defined module variable in app.js
    /*app.controller('CustomersController', function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
               {joined: '2000-12-02', name: 'John', city: 'Chicago', orderTotal: 9.99956},
               {joined: '2000-12-02', name: 'John', city: 'Chicago', orderTotal: 12.99956},
               {joined: '2000-12-02', name: 'John', city: 'Chicago', orderTotal: 3.99956},
               {joined: '2012-12-02', name: 'Aviv', city: 'Tel Aviv', orderTotal: 15.99956}
           ];
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    });
}()); */

//option 2
/*(function(){
    
    angular.module('app')
        .controller('CustomersController', function ($scope) {
            $scope.sortBy = 'name';
            $scope.reverse = false;

            $scope.customers = [
                   {joined: '2000-12-02', name: 'John', city: 'Chicago', orderTotal: 9.99956},
                   {joined: '2000-12-02', name: 'John', city: 'Chicago', orderTotal: 12.99956},
                   {joined: '2000-12-02', name: 'John', city: 'Chicago', orderTotal: 3.99956},
                   {joined: '2012-12-02', name: 'Aviv', city: 'Tel Aviv', orderTotal: 15.99956}
               ];
            $scope.doSort = function(propName) {
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
            };
    });
    
}());*/

//option 3
(function(){
    
    //first create your controller
    
    var CustomersController = function ($scope) {
            $scope.sortBy = 'name';
            $scope.reverse = false;

            $scope.customers = [
                   { id : 1, joined: '2000-12-02', name: 'John', city: 'Chicago', orderTotal: 9.99956},
                   { id : 2, joined: '2000-12-02', name: 'John', city: 'Chicago', orderTotal: 12.99956},
                   { id : 3, joined: '2000-12-02', name: 'John', city: 'Chicago', orderTotal: 3.99956},
                   { id : 4, joined: '2012-12-02', name: 'Aviv', city: 'Tel Aviv', orderTotal: 15.99956}
               ];
            $scope.doSort = function(propName) {
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
            };
    }; 
    
    //inject dependencies
    CustomersController.$inject = ['$scope'];
    
    //then plug it into angular
    
    angular.module('app')
        .controller('CustomersController', CustomersController)
    
}());