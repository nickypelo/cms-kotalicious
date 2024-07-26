import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  date: Date = new Date();
  year: number = this.date.getFullYear();

  logo: string = '../../../assets/logo.jpg';
  tiktok: string = '../../../assets/tiktok.png';
  instagram: string = '../../../assets/instagram.png';
  whatsapp: string = '../../../assets/whatsapp.png';

}
