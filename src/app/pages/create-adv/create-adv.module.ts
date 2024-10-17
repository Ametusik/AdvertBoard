import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateAdvComponent} from "./create-adv.component";
import { CreateAdvFormComponent } from './components/create-adv-form/create-adv-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [CreateAdvComponent, CreateAdvFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
  exports:[
    CreateAdvComponent
  ]
})
export class CreateAdvModule { }
