
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from "primeng/dialog";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthorizationService, CreateUserDto, LoginUserDto } from "../../../../client/src/app/core/modules/openapi";
import { SessionStorageService } from "../../shared/services/session-storage.service";
import { ShowAuthModalService } from "../../shared/services/show-auth-modal.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, DialogModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  visibleModal: boolean = false;
  authForm: FormGroup = new FormGroup({
    'login': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  header: string = 'Авторизация';
  isLogin: boolean = true;
  submitted: boolean = false;

  constructor(private authService: AuthorizationService,
              private sessionStorageService: SessionStorageService,
              private showAuthModalService: ShowAuthModalService) {}

  ngOnInit() {
    this.showAuthModalService.showAuthModalFlag$.subscribe(data => {
      this.visibleModal = data;
    });
  }

  openModal() {
    this.visibleModal = true;
  }

  setRegistration(): void {
    this.isLogin = false;
    this.authForm.addControl('name', new FormControl('', [Validators.required, Validators.minLength(4)]));
    this.header = 'Регистрация';
  }

  setLogin(): void {
    this.isLogin = true;
    this.authForm.removeControl('name');
    this.header = 'Авторизация';
  }

  auth(): void {
    this.submitted = true;
    if (this.isLogin) {
      const loginUserDto: LoginUserDto = {
        login: this.authForm.get('login')?.value,
        password: this.authForm.get('password')?.value
      };
      this.authService.authLoginPost(loginUserDto).subscribe(data => {
        this.sessionStorageService.saveToken(data);
        this.closeModal();
      });
    } else {
      const createUserDto: CreateUserDto = {
        login: this.authForm.get('login')?.value,
        name: this.authForm.get('name')?.value,
        password: this.authForm.get('password')?.value
      };
      this.authService.authRegisterPost(createUserDto).subscribe(data => {
        const loginUserDto: LoginUserDto = {
          login: this.authForm.get('login')?.value,
          password: this.authForm.get('password')?.value
        };
        this.authService.authLoginPost(loginUserDto).subscribe(data => {
          this.sessionStorageService.saveToken(data);
          this.showAuthModalService.closeModal();
        });
      });
    }
  }

  closeModal() {
    this.showAuthModalService.closeModal();
    this.authForm.reset();
    this.submitted = false;
  }
}
