import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  getCards() : Observable<any> {
    try {
      const cards = this.http.get('https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards').pipe(delay(2000))
      console.log('cards', cards);
      return cards;

    } catch (error) {
      console.error('Error getting cards', error);
      return of([]);
    }
  }
}
