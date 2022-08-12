import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  profilePic: any;

  constructor(private tokenStorageService: TokenStorageService,private _userService : UserService) { }

  ngOnInit(): void {
    this.setProfilePic();
    this._userService.getProfile().subscribe(
      data => {
        this.userProfile = data;
      },
      err => {

      }
    );
  }

  private setProfilePic() {
    const user = this.tokenStorageService.getUser();
    this.profilePic = user.imageUrl;
    if (!this.profilePic || this.profilePic === '') {
      this.profilePic = '../../assets/images/user/profile/default.png';
    }
  }
}
