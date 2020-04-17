import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
 // selector:'prod-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle:string='Product Detail'; 
product:IProduct;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id= +this.route.snapshot.paramMap.get('id');
    this.pageTitle+=`: ${id}`;
    this.product={
      'productId':id,
      "productName":"Aeroplane",
            "productCode":"abc123",
            "releaseDate":"April 20,2020",
            "description":"mjaaa ek dum",
            "price":120000,
            "starRating":4.5,
            "imageUrl":"assets/images/aeroplane.png"
    }
  }

  onBack():void{
    this.router.navigate(['/products'])
  }
}
