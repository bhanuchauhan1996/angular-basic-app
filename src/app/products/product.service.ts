import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn:'root'
})
export class ProductService{

getProducts():IProduct[]{
    return [
        {
            "productId":2,
            "productName":"Mobile",
            "productCode":"abc123",
            "releaseDate":"April 20,2020",
            "description":"mast ek dum",
            "price":12000,
            "starRating":2.2,
            "imageUrl":"assets/images/mobile.png"
        },
        {
            "productId":1,
            "productName":"Aeroplane",
            "productCode":"abc123",
            "releaseDate":"April 20,2020",
            "description":"mjaaa ek dum",
            "price":120000,
            "starRating":4.5,
            "imageUrl":"assets/images/aeroplane.png"
        }
    ];
}
    
    
}