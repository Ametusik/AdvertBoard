import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-phone-number-modal',
  templateUrl: './phone-number-modal.component.html',
  styleUrls: ['./phone-number-modal.component.scss']
})
export class PhoneNumberModalComponent {
  visibleModal:boolean=false;
  @Input() phoneNumber:string='';

  showNumber() {
    this.visibleModal=true;
  }
}
