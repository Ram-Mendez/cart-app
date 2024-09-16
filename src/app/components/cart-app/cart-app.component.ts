import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {
  productService = inject(ProductService);

  products!: Product[];

  ngOnInit() {
    this.products = this.productService.findAll();
  }


  protected readonly Product = Product;
}
