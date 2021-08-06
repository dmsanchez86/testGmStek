import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isOpenMenu: boolean = false;

  ngOnInit(){
    if(localStorage.isOpenMenu){
      this.isOpenMenu = JSON.parse(localStorage.isOpenMenu);
    }
  }

  nav(){
    this.isOpenMenu = !this.isOpenMenu;

    localStorage.isOpenMenu = JSON.stringify(this.isOpenMenu);
  }
}
