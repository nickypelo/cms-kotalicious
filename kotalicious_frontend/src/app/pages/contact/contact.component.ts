import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  phone: string = '../../../assets/phone.png';
  address: string = '../../../assets/address.png';
  email: string = '../../../assets/email.png';
}
