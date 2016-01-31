/// <reference path="../../typings/tsd.d.ts" />

module main.product {
    
    interface IProductModel {
        title: string;
        product: main.domain.IProduct;
    }
    
    interface IProductParams extends ng.route.IRouteParamsService {
        productId: number;
    }
    
    class ProductCtrl implements IProductModel {
        title: string;
        product: main.domain.IProduct;
        
        constructor(private $routeParams: IProductParams, private dataAccessService: main.shared.IDataAccessService){
            this.title = "Product";
            dataAccessService.getProductResource().get({productId: $routeParams.productId}, (data: main.domain.IProduct) => {
                this.product = data;
            });
        }
    }
    
    angular
        .module('main.product')
        .controller('product', ProductCtrl);
}