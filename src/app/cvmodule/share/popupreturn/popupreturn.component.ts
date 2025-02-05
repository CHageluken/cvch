import { Component, OnInit } from '@angular/core';
import { CvItemsService } from '../../cvitems.service';

@Component({
  selector: 'app-popupreturn',
  templateUrl: './popupreturn.component.html'
})
export class PopupreturnComponent implements OnInit{
  returnaddress!: string;

  constructor(private cvitemsService: CvItemsService) { }

  ngOnInit(): void {
    this.returnaddress = "../../" + this.cvitemsService.getCurrentlink();
  }


}
