import { Component } from '@angular/core';
import { CardService } from '../services/card.service';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  selectedCard: any;

  constructor(private cardService: CardService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const cardId = this.route.snapshot.paramMap.get('id');
    if (cardId) {
      const id = +cardId;
      this.cardService.getCards().subscribe(cards => {
        this.selectedCard = cards.find(card => card.id === id);
      });
    }
  }

  goBack(): void {
    const selectedCardId = this.cardService.getSelectedCardId();
    this.cardService.setSelectedCardId(selectedCardId);
    this.router.navigate(['/card']);
  }
}
