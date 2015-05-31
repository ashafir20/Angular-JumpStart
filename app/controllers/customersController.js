angular.module('app', []).controller('CustomersController', ['$scope', function CustomersController($scope) {
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
}]);