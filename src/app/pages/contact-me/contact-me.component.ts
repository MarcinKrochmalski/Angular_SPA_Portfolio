import { Component } from '@angular/core';
import { HttpService } from '../../servises/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faChevronCircleRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { ContactMePage } from '../../database/ContactMePage.database'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styles: [
  ]
})

export class ContactMeComponent {

  ContactMePage = ContactMePage;
  faChevronCircleRight = faChevronCircleRight;
  faTimesCircle = faTimesCircle;
  infoBar = '';

  formFields = [
    {
      name: "name",
      type: "text",
      text: 'Your Name',
      error: false,
      validators: [Validators.required, Validators.minLength(2)]
    },
    {
      name: 'email',
      type: "email",
      text: 'E-mail',
      error: false,
      validators: [Validators.required, Validators.email]
    },
    {
      name: "message",
      type: "textarea",
      text: 'Your message',
      error: false,
      validators: [Validators.required, Validators.minLength(2)]
    }
  ];

  form: FormGroup;

  constructor(private httpService: HttpService) {

    const fields = {};
    this.formFields.forEach(field => fields[field.name] = new FormControl('', field.validators))
    this.form = new FormGroup(fields);

  }

  handleFocus(fieldName: string): void {

    const index = this.formFields.findIndex((field) => field.name === fieldName)
    this.formFields[index].error = false

  }

  checkField(fieldName: string): void {

    const index = this.formFields.findIndex((field) => field.name === fieldName)
    this.formFields[index].error = this.form.get(fieldName).invalid;

  }

  handleSubmit(): void {

    if (this.form.status === 'VALID') {

      let data = new FormData()
      data.append("form", JSON.stringify(this.form.value))

      this.httpService.sendEmail(data).subscribe(
        response => {
          this.infoBar = response.toString();
        },
        () => {
          this.infoBar = ContactMePage.error;
        }
      )

    } else {

      this.formFields.forEach(field => this.checkField(field.name));

    }

  }


}
