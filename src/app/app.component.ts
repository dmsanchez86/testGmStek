import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test2';
  isOpenMenu: boolean = false;

  nav(){
    this.isOpenMenu = !this.isOpenMenu;
  }
}
