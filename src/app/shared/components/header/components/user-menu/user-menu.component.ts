import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from "../../../../services/session-storage.service";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit{

  isLogged: boolean = false;
  constructor(private sessionStorageService: SessionStorageService) {
  }

  ngOnInit() {
    this.sessionStorageService.isLogged$.subscribe(
      isLogged => {
        this.isLogged = isLogged;
      }
    );
  }
}
