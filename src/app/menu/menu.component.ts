import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
declare var $:any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn: boolean = false;

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
  }

  openLogin(){
    $('#login').modal('show');
  }

  openRegister(){
    $('#register').modal('show');
  }
}
