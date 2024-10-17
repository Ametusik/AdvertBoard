import {Component, Input, OnInit} from '@angular/core';
import {AdvertDto, AdvertService} from "../../../../../../client/src/app/core/modules/openapi";

@Component({
  selector: 'app-advert-content',
  templateUrl: './advert-content.component.html',
  styleUrls: ['./advert-content.component.scss']
})
export class AdvertContentComponent implements OnInit {
  @Input() id: string;
  advert: AdvertDto;
  images: string[] = [];
  imageUrl: string = 'http://dzitskiy.ru:5000/Images/';

  constructor(private advertService: AdvertService) {
  }

  ngOnInit(): void {
    this.advertService.advertIdGet(this.id).subscribe(data => {
      this.advert = data
      for (let i: number = 0; i < this.advert.imagesIds.length; i++) {
        this.images[i] = this.imageUrl.concat(this.advert.imagesIds[i]);
      }
    })
  }
}
