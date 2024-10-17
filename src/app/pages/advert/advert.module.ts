import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertComponent } from './advert.component';
import { AdvertContentComponent } from './components/advert-content/advert-content.component';
import { PhoneNumberModalComponent } from './components/advert-content/components/phone-number-modal/phone-number-modal.component';
import {DialogModule} from "primeng/dialog";
import {CarouselModule} from "primeng/carousel";



@NgModule({
  declarations: [
    AdvertComponent,
    AdvertContentComponent,
    PhoneNumberModalComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    CarouselModule
  ]
})
export class AdvertModule { }
