import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

// Custom Pipes
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { TrimPipe } from '../pipes/trim.pipe';
import { ArrsumPipe } from '../pipes/arrsum.pipe';

// Services
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule, CapitalizePipe, FilterPipe, TrimPipe, ArrsumPipe],  //NgFor is used to render the "ngFor" in template CommonModule contain all the directives ngFor, ngIf, ngSwitch instead of add 
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  encapsulation: ViewEncapsulation.Emulated
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


  //ngIf
  searchValue: string = ''

  TextSearch(event: any) {
    this.searchValue = event.target.value
  }

  // ngSwitch
  day: number | null = null;

  // Attribute Derectives
  products = [
    {
      name: 'Mobile',
      price: 35000,
      inStock: true
    },

    {
      name: 'Laptop',
      price: 65000,
      inStock: true
    },

    {
      name: 'Keyboard',
      price: 12000,
      inStock: false
    }
  ]

  // ngClass
  text1: string = ""

  addText1(event: any) {
    this.text1 = event.target.value
  }

  // ng-template

  status = false

  // Pipes
  pipe_text: string = "piPe TeXT"
  pipe_price: number = 89000
  pipe_date = "2025-02-03"
  pipe_value = 1.12
  arr = [10, 20, 30,"Apple", 40, 50, "Banana", true]
  pipe_string = "I'm in Hyderabad right now"

  // Services
  s_message:string = ''

  getMessage(msg:MessageService) {
    this.s_message = msg.getMessage()
  }
}