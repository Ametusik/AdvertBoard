import {Component, OnInit} from '@angular/core';
import {ShortAdvertDto, UserDto, UsersService} from "../../../../../../client/src/app/core/modules/openapi";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {

  user: UserDto
  advertList: ShortAdvertDto[] = [];

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.usersService.usersCurrentGet().subscribe(data=>{
      this.user = data;
      this.advertList = this.user.adverts
    })
  }

  sendToAddAdvPage(){
    this.router.navigate(['/newAdv'])
  }
}
