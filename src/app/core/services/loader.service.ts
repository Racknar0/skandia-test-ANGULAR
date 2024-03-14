import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaddingTriggered = new Subject<boolean>();

  constructor() { }

  setIsLoading(isLoading: boolean): void {
    this.loaddingTriggered.next(isLoading);
  }
}
