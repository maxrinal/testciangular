import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Reading a json from assets folder';
  ngOnInit(): void {
    fetch('/data.json').then(res => res.json())
    .then(console.log); // do something with data
  }
}
