import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  counter = 0;
  message = `REACT GAMBS WORKS! `;

  onClick(){
    this.counter = this.counter+1;
  }

  ngOnChanges() {
    console.log(this.message);
  }
}
