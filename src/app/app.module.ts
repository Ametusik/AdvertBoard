import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderModule} from "./shared/components/header/header.module";
import {AppRoutingModule} from "./app-routing.module";
import {ApiModule} from "../../client/src/app/core/modules/openapi";
import {MainPageModule} from "./pages/main-page/main-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    ApiModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
