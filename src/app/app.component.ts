import * as Raven from 'raven-js';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit() {
    Raven.captureException(new Error('capture'))
    throw new Error('throw')
  }
}
