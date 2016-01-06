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

        constructor() {
            this.title = "Product list"
            this.showImage = false;
            this.products = [
                {
                    "productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": new Date(2009, 2, 19),
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": new Date(2010, 2, 18),
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                {
                    "productId": 5,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": new Date(2013, 4, 21),
                    "description": "Curved claw steel hammer",
                    "price": 8.99,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                }
            ]

            var newProduct = new main.domain.Product(3, "Saw", "TBX-002", new Date(2002,3,1), 100, "15-inch steel blade hand saw", "https://openclipart.org/download/27070/egore911-saw.svg");
            newProduct.price = newProduct.calculateDiscount(30);
            
            this.products.push(newProduct);

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