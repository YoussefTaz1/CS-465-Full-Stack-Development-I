import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripData } from '../services/trip-data';



@Injectable({
  providedIn: 'root'
})
export class Authentication {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripData

  ) { }

  // Variable to store the auth response
  authResp: AuthResponse = new AuthResponse();

  // Get token from local storage
  public getToken(): string {
    let out: any;
    out = this.storage.getItem('travlr-token');
    if (!out) {
      return '';
    }
    return out;
  }

  // Save token to local storage
  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  // Remove token from local storage
  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  // Check if token exists and is still valid
  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  // Extract and return user info from token
  public getCurrentUser(): User {
    const token: string = this.getToken();
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
    return { email, name } as User;
  }

  // Handle login using TripDataService
  public login(user: User, passwd: string): void {
    this.tripDataService.login(user, passwd)
      .subscribe({
        next: (value: any) => {
          if (value) {
            console.log(value);
            this.authResp = value;
            this.saveToken(this.authResp.token);
          }
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

  // Handle registration using TripDataService
  public register(user: User, passwd: string): void {
    this.tripDataService.register(user, passwd)
      .subscribe({
        next: (value: any) => {
          if (value) {
            console.log(value);
            this.authResp = value;
            this.saveToken(this.authResp.token);
          }
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }
}
