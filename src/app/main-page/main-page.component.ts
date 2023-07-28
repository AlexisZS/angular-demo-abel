import { Component } from '@angular/core';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-main-page',
  template: `
    <h1>Consulta de ofertaasadsasas</h1>
    <label for="identification">Número de identificación:asds</label>
    <input type="text" [(ngModel)]="identification" id="identification" (keyup)="fetchOffer()" />
    <div *ngIf="offer">
      <h2>Oferta encontrada</h2><br>
      <p>Identificación : {{ offer.identification }}</p><br>
      <p>Descuento : {{ offer.discount }}</p>
    </div>
    <div *ngIf="error">
      <p>Error al obtener la oferta</p>
    </div>
  `,
})
export class MainPageComponent {
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
