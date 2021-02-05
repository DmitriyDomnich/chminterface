import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void{
    this.products = this.productService.getProducts();
    console.log(this.products);
  }
  navigateTo(id: number): void{
    this.router.navigate(['/product', id]);
  }
}
