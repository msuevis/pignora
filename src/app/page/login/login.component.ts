import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { AuthAPIService } from '../../services/auth-api.service';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  public responseData: any;
  public userPostData = {
    email: '',
    name: '',
    provider: '',
    provider_id: '',
    provider_pic: '',
    token: ''
  };

  constructor(private authService: AuthService, public userService: UsersService, public authAPIService: AuthAPIService) {
    this.userService.sessionIn();
   }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.apiConnection(this.user);
      }
    });
  }


  loginBtn() {
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  apiConnection(data) {
    this.userPostData.email = data.email;
    this.userPostData.name = data.name;
    this.userPostData.provider = data.provider;
    this.userPostData.provider_id = data.id;
    this.userPostData.provider_pic = data.image;
    this.userPostData.token = data.token;

    this.authAPIService.postData(this.userPostData).then(
      result => {
        this.responseData = result;
        if (this.responseData.userData) {
          this.userService.storeData(this.responseData.userData);
        }
      },
      err => {
        console.log('error');
      }
    );
  }

}
