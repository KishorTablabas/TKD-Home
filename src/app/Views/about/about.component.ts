import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefundComponent } from 'src/app/Components/refund/refund.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(
    private modalService: NgbModal
  ) { }

  openpopup() {
    const modalRef = this.modalService.open(RefundComponent, {
      size: "lg", centered: true, backdrop: 'static', keyboard: false
    });
  }
}
