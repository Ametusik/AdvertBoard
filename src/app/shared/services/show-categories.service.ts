import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShowCategoriesService {
  private showCategoriesSource = new BehaviorSubject<boolean>(false);
  showCategories$ = this.showCategoriesSource.asObservable();
  constructor() { }

  toggleCategories() {
    const currentState = this.showCategoriesSource.value;
    this.showCategoriesSource.next(!currentState);
  }
}
