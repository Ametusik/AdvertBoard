import {Component, OnInit} from '@angular/core';
import {UserDto, UsersService} from "../../../../../../../../../client/src/app/core/modules/openapi";
import {SessionStorageService} from "../../../../../../services/session-storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: UserDto;

  constructor(private userService: UsersService,
              private sessionStorageService: SessionStorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.usersCurrentGet().subscribe(data => {
      this.user = data;
    })
  }

  logout(){
    this.sessionStorageService.deleteToken();
  }

  navigateToMyAdvs() {
    this.router.navigate(['/myAdvs'])
  }
}
