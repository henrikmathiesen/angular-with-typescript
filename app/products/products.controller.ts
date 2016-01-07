/// <reference path="../../typings/tsd.d.ts" />

module main.products {

    interface IProductsModel {
        title: string;
        showImage: boolean;
        products: main.domain.IProduct[];
        toggleImage(): void;
    }

    class ProductsCtrl implements IProductsModel {
        title: string;
        showImage: boolean;
        products: main.domain.IProduct[];

        constructor(private dataAccessService: main.shared.IDataAccessService) {
            this.title = "Product list"
            this.showImage = false;
            this.products = [];
            
            dataAccessService.getProductResource().query((data: main.domain.IProduct[]) => {
                this.products = data;
            });

            console.log("prod ctrl");
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }
        
        
    }


    angular
        .module('main.products')
        .controller('products', ProductsCtrl);
}