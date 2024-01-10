import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefundComponent } from 'src/app/Components/refund/refund.component';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent {
  constructor(
    private modalService: NgbModal
  ) { }

  openpopup() {
    const modalRef = this.modalService.open(RefundComponent, {
      size: "lg", centered: true, backdrop: 'static', keyboard: false
    });
  }
}
