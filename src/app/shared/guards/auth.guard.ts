import {CanActivateFn} from '@angular/router';
import {inject} from "@angular/core";
import {SessionStorageService} from "../services/session-storage.service";
import {ShowAuthModalService} from "../services/show-auth-modal.service";


export const authGuard: CanActivateFn = (route, state) => {
  const sessionStorageService: SessionStorageService = inject(SessionStorageService);
  const showAuthModalService: ShowAuthModalService = inject(ShowAuthModalService);
  if (sessionStorageService.getToken() == null) {
    showAuthModalService.showModal();
    return false;
  } else return true;
};
