(function(){
    
    "use strict";
    
    var OrdersController = function ($scope, $routeParams) {
        
            var customerId = $routeParams.customerId;
            $scope.orders = null;    
        
            function init() {
                for(var i=0; i<$scope.customers.length; i++){
                    if($scope.customers[i].id === parseInt(customerId)) {
                        $scope.orders = $scope.customers[i].orders;
                        break;
                    }
                }
            }
        
            $scope.customers = 
            [
                {
                    id: 1,
                    joined: '2000-12-02',
                    name: 'John',
                    city: 'Chicago',
                    orderTotal: 9.99956,
                    orders: 
                        [{
                            id: 1,
                            product: 'Shoes',
                            total: 9.995
                        }, 
                        {
                            id: 2,
                            product: 'Baseball',
                            total: 19.935               
                        },
                        {
                            id: 3,
                            product: 'Footbal',
                            total: 49.935               
                        }]
               },
               {
                    id: 2,
                    joined: '2000-12-02',
                    name: 'John', city: 'Chicago',
                    orderTotal: 12.99956,
                    orders: 
                        [{
                            id: 4,
                            product: 'Shoes',
                            total: 9.995
                        }, 
                        {
                            id: 5,
                            product: 'Baseball',
                            total: 19.935            
                        },
                        {
                            id: 6,
                            product: 'Footbal',
                            total: 49.935             
                        }]
                }
            ];
        
        init();
    };
    
    //inject dependencies
    OrdersController.$inject = ['$scope', '$routeParams'];
    
    //then plug it into angular
    
    angular.module('app')
        .controller('OrdersController', OrdersController)
    
}());