import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { CategoriesListComponent } from './components/search-panel/components/categories-list/categories-list.component';
import { SearchInputComponent } from './components/search-panel/components/search-input/search-input.component';
import { AddAdvButtonComponent } from './components/user-menu/components/add-adv-button/add-adv-button.component';
import { LoginButtonComponent } from './components/user-menu/components/login-button/login-button.component';
import { UserInfoComponent } from './components/user-menu/components/user-info/user-info.component';
import {RouterLink} from "@angular/router";
import {
  CategoriesDropdownComponent
} from "./components/search-panel/components/categories-dropdown/categories-dropdown.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    UserMenuComponent,
    SearchPanelComponent,
    CategoriesListComponent,
    SearchInputComponent,
    AddAdvButtonComponent,
    LoginButtonComponent,
    UserInfoComponent,
    CategoriesDropdownComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
