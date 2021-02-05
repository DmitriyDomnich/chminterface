import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = {id: 0, image: '', title: '', isDeliverable: false, description: ''};
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void{
    const idLit = 'id';
    const id = +this.route.snapshot.url[1].path;
    this.product = this.productService.getProduct(id);
    console.log(this.product);
  }

}
