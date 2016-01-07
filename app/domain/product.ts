module main.domain {
    
    export interface IProduct {
        productId: number;
        productName: string;
        productCode: string;
        releaseDate: Date;
        price: number;
        description: string;
        imageUrl: string;
        showDiscount: boolean;
        beforeDiscountedPrice: number;
    }
    
    export class Product implements IProduct {
        showDiscount: boolean;
        beforeDiscountedPrice: number;
        
        constructor(public productId: number,
                    public productName: string,
                    public productCode: string,
                    public releaseDate: Date,
                    public price: number,
                    public description: string,
                    public imageUrl: string){
                        
                        this.showDiscount = false;
                        this.beforeDiscountedPrice = price;
        }
        
        static calculateDiscount(price: number, percent: number): number {
            return price - (price * (percent / 100));
        }
    }
    
}



/* 

    ^ is the same as bellow

    class Product implements IProduct {
        
        productName: string;
        
        constructor(productName: string){
            this.productName = productName;
        }
    }

*/