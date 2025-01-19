import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main',
  imports: [FormsModule, NgFor],  //NgFor is used to render the "ngFor" in template
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  search: string = ''
  text: string = ''

  SearchText() {
    this.text = 'You have Searched for: ' + this.search
  }

  Text(event: any) {
    this.search = event.target.value
  }

  // Directives
  fruits = ['Apple', 'Banana', 'Papaya', 'Mango']

  // Flipkart Mobile Display Section

  items = [
    {
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/n/s/-original-imah4jyfrgsbebg9.jpeg?q=70',
      name: 'Apple iPhone 16 (Ultramarine, 128 GB)',
      price: '67,999',
      specs: [
        {
          first: '256 GB ROM',
          sec: '15.49 cm (6.1 inch) Super Retina XDR Display',
          third: '48MP + 12MP | 12MP Front Camera',
          fourth: 'A18 Chip, 6 Core Processor Processor'
        }
      ]
    },
    {
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=70',
      name: 'Apple iPhone 16 Pro (Natural Titanium, 128 GB)',
      price: '1,12,900',
      specs: [
        {
          first: '256 GB ROM',
          sec: '16.0 cm (6.3 inch) Super Retina XDR Display',
          third: '48MP + 48MP + 12MP | 12MP Front Camera',
          fourth: 'A18 Chip, 6 Core Processor Processor'
        }
      ]
    },
    {
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
      name: 'Apple iPhone 14 (Blue, 128 GB)',
      price: '50,999',
      specs: [
        {
          first: '128 GB ROM',
          sec: '15.49 cm (6.1 inch) Super Retina XDR Display',
          third: '12MP + 12MP | 12MP Front Camera',
          fourth: 'A15 Bionic Chip, 6 Core Processor Processor'
        }
      ]
    }
  ]


}
