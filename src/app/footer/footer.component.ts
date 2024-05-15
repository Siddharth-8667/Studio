import { Component } from '@angular/core';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  locationIcon=faLocationDot;
  email=faEnvelope;
  phoneIcon=faPhone;


}
