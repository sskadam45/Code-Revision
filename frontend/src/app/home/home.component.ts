import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  isLoggedIn = false;

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService, private router: Router) { }
    
    ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
      this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  onViewDetailsClicked() {
    // if(this.isLoggedIn) {
    //   this.router.navigateByUrl('home');
    // } else {
    //   this.router.navigateByUrl('login');
    // }
  }
}
