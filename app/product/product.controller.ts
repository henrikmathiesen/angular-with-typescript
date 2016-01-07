/// <reference path="../../typings/tsd.d.ts" />

module main.product {
    
    interface IProductModel {
        title: string;
        product: main.domain.IProduct;
    }
    
    class ProductCtrl implements IProductModel {
        title: string;
        product: main.domain.IProduct;
        
        constructor(private $routeParams: any, private dataAccessService: main.shared.IDataAccessService){
            this.title = "Product"
            dataAccessService.getProductResource().get({productId: $routeParams['productId']}, (data: main.domain.IProduct) => {
                this.product = data;
            });
        }
    }
    
    angular
        .module('main.product')
        .controller('product', ProductCtrl);
}