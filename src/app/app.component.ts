import { Component } from '@angular/core';
import { OfferService } from './offer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  identification!: string;
  offer: any;
  error: any;

  constructor(private offerService: OfferService) {}

  fetchOffer() {
    if (this.identification) {
      this.offerService.getOffer(this.identification).subscribe(
        (data) => {
          this.offer = data;
          this.error = null;
        },
        (error) => {
          this.error = error;
          this.offer = null;
        }
      );
    }
  }
}
