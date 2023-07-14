import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxCaptchaService } from '@binssoft/ngx-captcha';
import { ContactService } from 'src/app/service/contact.service';
import { errorAlert, successAlert } from 'src/app/utils/alert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  captchaStatus: any = null;
  captchaConfig: any = {
    length: 6,
    cssClass: 'custom',
    back: {
      stroke: "#2F9688",
      solid: "#f2efd2"
    },
    font: {
      color: "#000000",
      size: "35px"
    }
  };

  isCaptcha = false;
  captchaText = '';

  constructor(
    private captchaService: NgxCaptchaService,
    private contactService: ContactService,
    private fb: FormBuilder,
  ) { }

  formGroup = this.fb.group({
    id: 0,
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    date: new Date(),
  });

  ngOnInit() {
    this.captchaService.captchStatus.subscribe((status) => {
      this.captchaStatus = status;
      if (status == false) {
        // alert("Opps!\nCaptcha mismatch");
        this.captchaText = 'Captcha mismatch';
        this.isCaptcha = false;
      } else if (status == true) {
        this.isCaptcha = true;
        this.captchaText = 'Successfully checked!';
        // this.captchaText = 'Captcha mismatch'
      }
    });
  }

  save() {
    if (this.isCaptcha) {
      // console.log(this.formGroup.value)
      this.contactService.save(this.formGroup.value).subscribe({
        next: res => {
          // console.log(res)
          successAlert("Successfully send!")
          this.formGroup.reset(
            {
              id: 0,
              name: "",
              surname: "",
              email: "",
              phone: "",
              message: "",
              date: new Date(),
            }
          )
        },
        error: err => console.log(err)
      })
    }

    else {
      errorAlert('Please, verify captcha!')
    }
  }
}
