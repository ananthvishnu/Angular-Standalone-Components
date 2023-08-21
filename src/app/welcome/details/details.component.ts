import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';

@Component({
  standalone:true,
  imports:[HighlightDirective],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  //? Constructor with dependency injection of the AnalyticsService
  constructor(private analyticsService: AnalyticsService) {}

 //? Method triggered by a user click event
  onClick() {
     //? Call the registerClick() method from the injected AnalyticsService
    this.analyticsService.registerClick();
  }
}
