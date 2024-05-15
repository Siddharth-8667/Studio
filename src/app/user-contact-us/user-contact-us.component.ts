import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-contact-us',
  templateUrl: './user-contact-us.component.html',
  styleUrl: './user-contact-us.component.css'
})
export class UserContactUsComponent {
  constructor(private user:UserService){}
  locationIcon=faLocationDot;
  email=faEnvelope;
  phoneIcon=faPhone;

  submit(form: NgForm){
    if (form.valid) {
      this.user.userEenquiry(form.value).subscribe((result) => {
        console.warn(result);
        alert('Form submitted successfully!');
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}