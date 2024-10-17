import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AdvertComponent} from "./pages/advert/advert.component";
import {CreateAdvComponent} from "./pages/create-adv/create-adv.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {authGuard} from "./shared/guards/auth.guard";
import {MyAdvsComponent} from "./pages/my-advs/my-advs.component";

const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path:'profile', component:ProfileComponent, canActivate:[authGuard]},
  {path:'advert/:id', component:AdvertComponent},
  {path:'newAdv',component:CreateAdvComponent, canActivate:[authGuard]},
  {path:'myAdvs', component: MyAdvsComponent, canActivate:[authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
