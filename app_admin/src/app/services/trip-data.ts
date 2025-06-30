import { Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

import { Trip } from '../models/trip'; 
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripData {
  
   
   Url = 'http://localhost:3000/api/trips';
   baseUrl = 'http://localhost:3000/api';


   constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

 // Get all trips
   getTrips(): Observable<Trip[]> {
     return this.http.get<Trip[]>(this.Url);
  } 
  
  // Add a new trip
  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.Url, formData);
  }

  //  Get a single trip by its code
  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(this.Url + '/' + tripCode);
  } 

  // Update an existing trip
  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(this.Url + '/' + formData.code, formData);
  }

  // ============================
  // Authentication Methods
  // ============================

  // Call to /login endpoint, returns JWT
  login(user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripData::login');
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Call to /register endpoint, creates user and returns JWT
  register(user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripData::register');
    return this.handleAuthAPICall('register', user, passwd);
  }

  // Shared helper method for login/register
  handleAuthAPICall(endpoint: string, user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripData::handleAuthAPICall');
    const formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };
    return this.http.post<AuthResponse>(`${this.baseUrl}/${endpoint}`, formData);
  }
}

