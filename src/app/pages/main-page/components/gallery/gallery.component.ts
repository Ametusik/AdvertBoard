import {Component, OnInit} from '@angular/core';
import {AdvertService, ShortAdvertDto} from "../../../../../../client/src/app/core/modules/openapi";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  advertList: ShortAdvertDto[] = [];

  constructor(private advertService: AdvertService) {
  }

  ngOnInit(): void {
    this.advertService.advertSearchPost().subscribe(data => {
      this.advertList = data;
    })
  }
}
