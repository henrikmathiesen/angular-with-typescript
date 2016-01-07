/// <reference path="../../typings/tsd.d.ts" />

module main {
    angular.module('main', ['ngRoute', 'main.products', 'main.product'])
    
    .config(function($routeProvider: ng.route.IRouteProvider){
        
        $routeProvider
            .when('/products', {
                templateUrl: '/app/products/product-list.template.html',
                controller: 'products as productsCtrl'
            })
            .when('/product/:productId', {
                templateUrl: '/app/product/product.template.html',
                controller: 'product as productCtrl'
            })
        
            .otherwise('/products');
        
    });
}