import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateAdvComponent} from "./create-adv.component";
import { CreateAdvFormComponent } from './components/create-adv-form/create-adv-form.component';



@NgModule({
  declarations: [CreateAdvComponent, CreateAdvFormComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CreateAdvComponent
  ]
})
export class CreateAdvModule { }
