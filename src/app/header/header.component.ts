import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Header 1
  title: string = 'Test1'
  age: number = 15

  // Header 2
  phone: string = 'Iphone 15 Plus'
  price: number = 70000
  discount: number = 10
  stock: number = 5
  image: string = 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70&crop=false'
  rating: number = 5
}