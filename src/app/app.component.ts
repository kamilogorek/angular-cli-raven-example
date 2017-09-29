import * as Raven from 'raven-js';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public items: any[];
  ngOnInit() {
    this.items = [1, 2];
    Raven.captureException(new Error('capture'))
    throw new Error('throw')
  }
}
