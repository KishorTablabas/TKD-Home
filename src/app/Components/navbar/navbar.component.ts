import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  closeResult = '';

  constructor(
    private modalService: NgbModal,
  ) { }




  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'open-popup', centered: true, keyboard: false }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }
}
