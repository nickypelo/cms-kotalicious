import { Component } from '@angular/core';

interface Navigate{
  name: string,
  link: string
}


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  showBar: string = 'none';

  navList: Navigate[] = [
    {name: 'Home', link: '/home'},
    {name: 'Menu', link: '/menu'},
    {name: 'Our Story', link: '/story'},
    {name: 'Contact', link: '/contact'},
    // {name: 'Home', link: '/'
  ]

  toggleNavSidebar = () =>{
    (this.showBar === 'block') ? this.showBar = 'none' : this.showBar = 'block'
  }

}
