import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { CardListService } from 'src/app/services/cardList.service';

@Component({
  selector: 'app-card-list',
  styleUrls: ['./card-list.component.css'],
  template: `
    <div class="cards_list">
      <span class="cards_list_title">Lista de cartas de la aplicación</span>
      <div *ngIf="cards.length" class="cards_list_helper">
        <app-card-list-item *ngFor="let card of cards" [cardData]="card.cardNames"></app-card-list-item>
      </div>
    </div>
  `,
})
export class CardListComponent implements OnInit {
  cards: any[] = [];
  constructor(private cardListService: CardListService) {}

  ngOnInit(): void {
    this.cardListService.getAllCards().subscribe(data => {
      data._embedded.cartas.forEach(element => {
        this.cardListService.getCardByURL(element._links.self.href).subscribe(carta => {
          let cardAux ={
            cardNames: carta._embedded.cardNames,
            illustrator: element.illustrator,
            card_type: element.card_type,
            rarity: element.rarity,
            item_def: element.item_def
          } 
          this.cards.push(cardAux);
        });
      });
    });
  }
}
