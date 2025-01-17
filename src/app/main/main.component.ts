import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main',
  imports: [FormsModule],
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
