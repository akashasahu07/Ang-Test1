import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
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
}
