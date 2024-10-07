import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from "./main-page.component";
import {GalleryComponent} from './components/gallery/gallery.component';
import {CardComponent} from './components/gallery/components/card/card.component';


@NgModule({
  declarations: [MainPageComponent, GalleryComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule {
}
