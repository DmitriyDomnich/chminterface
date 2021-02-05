
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {id: 1, title: 'Помидор', description: 'Очень вкусный и яркий овощь', image: '../assets/images/Помидор.jpg', isDeliverable: true},
    {id: 2, title: 'Огурец', description: 'Зеленый гигант', image: '../assets/images/Огурец.jpg', isDeliverable: false},
    {id: 3, title: 'Кукуруза', description: 'Сочная желтая вещь', image: '../assets/images/Кукуруза.png', isDeliverable: true},
    {id: 4, title: 'Морковь', description: 'Оранжевая, как солнце', image: '../assets/images/Морковь.jpg', isDeliverable: true},
    {id: 5, title: 'Пельмени', description: 'Сплошное мясо', image: '../assets/images/Пельмени.jpg', isDeliverable: false},
    {id: 6, title: 'Чипсы', description: 'Вредно, но вкусно', image: '../assets/images/Чипсы.jpg', isDeliverable: true},
    {id: 7, title: 'Редиска', description: 'С солью ммм', image: '../assets/images/Редиска.jpg', isDeliverable: false},
    {id: 8, title: 'Брокколи', description: 'Зеленый полезный овощь', image: '../assets/images/Брокколи.jpg', isDeliverable: true},
    {id: 9, title: 'Шампиньоны', description: 'Вкусные грибы', image: '../assets/images/Шампиньоны.jpg', isDeliverable: true},
    {id: 10, title: 'Лисички', description: 'Гриб из семейства лисичковых', image: '../assets/images/Лисички.jpg', isDeliverable: false}
];
constructor(

) { }
  getProducts(): Product[]{
    return this.products;
  }
  getProduct(id: number): any{
    return this.products.find((value) => value.id === id);
  }
}
