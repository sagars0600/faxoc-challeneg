import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = '../../assets/card-data.json';
  private movieUrl = '../../assets/movies-data.json';
  private selectedCardId: any;

  constructor(private http: HttpClient) {
    console.log(this.movieUrl);
  }

  getCards(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  setSelectedCardId(cardId: number): void {
    this.selectedCardId = cardId;
  }

  getSelectedCardId(): number {
    return this.selectedCardId;
  }

  getMovies(term:string){
    return this.http.get<any[]>(`this.movieUrl${term}`);
  }
}
