import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgxGoogleAnalyticsModule } from '@hakimio/ngx-google-analytics';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxGoogleAnalyticsModule // Google Analytics module
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-starter';
}
