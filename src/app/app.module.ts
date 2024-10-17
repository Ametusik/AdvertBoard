import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderModule} from "./shared/components/header/header.module";
import {AppRoutingModule} from "./app-routing.module";
import {ApiModule} from "../../client/src/app/core/modules/openapi";
import {MainPageModule} from "./pages/main-page/main-page.module";
import {AdvertModule} from "./pages/advert/advert.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from "./pages/login/login.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./shared/interceptors/token.interceptor";
import {CreateAdvModule} from "./pages/create-adv/create-adv.module";
import {MyAdvsModule} from "./pages/my-advs/my-advs.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    ApiModule,
    MainPageModule,
    AdvertModule,
    BrowserAnimationsModule,
    LoginComponent,
    CreateAdvModule,
    MyAdvsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
