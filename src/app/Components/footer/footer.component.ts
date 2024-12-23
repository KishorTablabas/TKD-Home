import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  messagesent: any = ''
  conatctform!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: ApiService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.conatctform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]],
      message: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
    })
  }

  Submit() {
    if (this.conatctform.valid) {
      console.log(this.conatctform.value);
      const obj = {
        concern: this.conatctform.value.name,
        loggedUserName: this.conatctform.value.email,
        topic: this.conatctform.value.message
      }
      this.service.GetInTouch(obj).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res) {
            this.messagesent = 'Message Send Successfully.'
            this.conatctform.reset()
            setTimeout(() => {
              this.messagesent = ''
            }, 3000);

          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);

        },
        complete: () => {

        }
      })

    }
  }
}
