import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cards: any[] | undefined;

  constructor(
    private cardService: CardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => {
      this.cards = cards;
    });
  }

  openCard(cardId: number): void {
    this.cardService.setSelectedCardId(cardId);
    this.router.navigate(['/card', cardId]);
  }

  goBackTask(){
    this.router.navigate(['/tasks']);
  }
}
