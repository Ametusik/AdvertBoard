import { Component } from '@angular/core';
import {ShowAuthModalService} from "../../../../../../services/show-auth-modal.service";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {
  constructor(private showAuthModalService: ShowAuthModalService) {
  }

  showLoginModal(){
    this.showAuthModalService.showModal();
  }
}
