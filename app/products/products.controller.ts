module main.products {

    interface IProductsModel {
        title: string;
        showImage: boolean;
        products: main.domain.IProduct[];
        toggleImage(): void;
        toggleDiscount(product: main.domain.IProduct): void;
    }

    class ProductsCtrl implements IProductsModel {
        title: string;
        showImage: boolean;
        showDiscount: boolean;
        products: main.domain.IProduct[];

        constructor(private dataAccessService: main.shared.IDataAccessService) {
            this.title = "Product list"
            this.showImage = false;
            this.showDiscount = false;
            this.products = [];
            
            dataAccessService.getProductResource().query((data: main.domain.IProduct[]) => {
                this.products = data;
            });

            console.log("prod ctrl");
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }
        
        toggleDiscount(product: main.domain.IProduct): void {
            product.price = (!product.showDiscount) ? (main.domain.Product.calculateDiscount(product.price, 30)) : (product.beforeDiscountedPrice);
            product.showDiscount = !product.showDiscount;
        }
    }


    angular
        .module('main.products')
        .controller('products', ProductsCtrl);
}
