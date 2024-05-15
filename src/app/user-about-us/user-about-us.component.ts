import { Component } from '@angular/core';

@Component({
  selector: 'app-user-about-us',
  templateUrl: './user-about-us.component.html',
  styleUrl: './user-about-us.component.css'
})
export class UserAboutUsComponent {
  aboutUsData = {
    title: "About Our Architecture Firm",
    description: "We are a passionate team of architects dedicated to creating exceptional designs that enhance the lives of our clients. With over 1 year of experience, we have successfully completed numerous projects across various sectors. Our commitment to innovation, sustainability, and client satisfaction sets us apart.",
    team: [
      { name: "AR.Dimpal Patel", position: "Founder & Principal Architect" },
      { name: "ID.Shruti Patil", position: "Lead Interior Designer" },
     
    ]
  };
}