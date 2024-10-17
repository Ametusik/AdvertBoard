import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent {
  id: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }
}
