import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AdvertComponent} from "./pages/advert/advert.component";
import {CreateAdvComponent} from "./pages/create-adv/create-adv.component";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path:'profile', component:ProfileComponent},
  {path:'advert/:id', component:AdvertComponent},
  {path:'newAdv',component:CreateAdvComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
