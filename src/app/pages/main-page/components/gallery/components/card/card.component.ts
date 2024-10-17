import {Component, Input, OnInit} from '@angular/core';
import {ShortAdvertDto} from "../../../../../../../../client/src/app/core/modules/openapi";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() advert: ShortAdvertDto;
  imageUrl: string = 'http://dzitskiy.ru:5000/Images/';

  constructor() {
  }

  ngOnInit():void{
    if (this.advert.imagesIds[0]!== undefined){
      this.imageUrl = this.imageUrl.concat(this.advert.imagesIds[0]);
    }

  }
}
