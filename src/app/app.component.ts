import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent, FirstComponent, SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test1';
}
