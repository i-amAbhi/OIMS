import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-common-lookup',
  templateUrl: './common-lookup.component.html',
  styleUrls: ['./common-lookup.component.css']
})
export class CommonLookupComponent {
  closeResult: string = '';

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
}
