import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShowAuthModalService {

  showAuthModalFlag: Subject<boolean> = new Subject<boolean>();
  showAuthModalFlag$ = this.showAuthModalFlag.asObservable();
  constructor() {
  }

  showModal(): void {
    this.showAuthModalFlag.next(true);
  }

  closeModal(): void {
    this.showAuthModalFlag.next(false);
  }
}
