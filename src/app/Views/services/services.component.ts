import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefundComponent } from 'src/app/Components/refund/refund.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {


  messagesent: any = ''
  conatctform!: FormGroup;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  openpopup() {
    const modalRef = this.modalService.open(RefundComponent, {
      size: "lg", centered: true, backdrop: 'static', keyboard: false
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.conatctform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]],
      message: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  Submit() {
    if (this.conatctform.valid) {
      console.log(this.conatctform.value);
      this.messagesent = 'Message Send Successfully.'
      this.conatctform.reset()

    }
  }
}
