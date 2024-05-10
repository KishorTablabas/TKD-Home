import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  messagesent: any = ''
  conatctform!: FormGroup;
  constructor(
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

  Submit() {
    if (this.conatctform.valid) {
      console.log(this.conatctform.value);
      this.messagesent = 'Message Send Successfully.'
      this.conatctform.reset()

    }
  }
}
