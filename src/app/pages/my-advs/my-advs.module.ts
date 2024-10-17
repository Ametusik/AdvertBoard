import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./components/gallery/gallery.component";
import {CardComponent} from "./components/gallery/components/card/card.component";
import {MyAdvsComponent} from "./my-advs.component";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [GalleryComponent,
    CardComponent,
    MyAdvsComponent],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class MyAdvsModule {
}
