import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MainPageComponent} from "./main-page.component";
import {GalleryComponent} from './components/gallery/gallery.component';
import {CardComponent} from './components/gallery/components/card/card.component';
import {RouterLink, RouterModule} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
  declarations: [MainPageComponent, GalleryComponent, CardComponent],
  imports: [
    CommonModule,
    RouterLink,
    AppRoutingModule,
    RouterModule,
    NgOptimizedImage
  ],
  exports: [
    MainPageComponent,
    GalleryComponent
  ]
})
export class MainPageModule {
}
