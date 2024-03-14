import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowDinamicService {

  isExpanded = new Subject<boolean>();

  constructor() { }

  changeDinamycComponent(showDinamycComponent: boolean) {
    this.isExpanded.next(showDinamycComponent);
  }
}
