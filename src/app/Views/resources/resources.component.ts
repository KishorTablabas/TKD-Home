import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefundComponent } from 'src/app/Components/refund/refund.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  closeResult = '';
  messagesent: any = ''
  conatctform!: FormGroup;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.conatctform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]],
      message: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  openpopup() {
    const modalRef = this.modalService.open(RefundComponent, {
      size: "lg", centered: true, backdrop: 'static', keyboard: false
    });
  }

  Submit() {
    if (this.conatctform.valid) {
      console.log(this.conatctform.value);
      this.messagesent = 'Message Send Successfully.'
      this.conatctform.reset()

    }
  }


  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'Contact-Us', size: "md", centered: true, keyboard: false }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }
  opensocial(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'social-Media', size: "md", centered: true, keyboard: false }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }
}
