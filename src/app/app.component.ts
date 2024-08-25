import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { NgxGoogleAnalyticsModule } from '@hakimio/ngx-google-analytics';

import bb, { line } from 'billboard.js';


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
export class AppComponent implements OnInit {
  title = 'graph-india';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.generateChart();
    }
  }

  generateChart(): void {
    bb.generate({
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25]
        ],
        type: line(), // for ESM specify as: line()
      },
      bindto: "#chart"
    });
  }
}
