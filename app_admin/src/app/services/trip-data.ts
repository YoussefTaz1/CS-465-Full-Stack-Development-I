import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

import { Trip } from '../models/trip'; 

@Injectable({
  providedIn: 'root'
})
export class TripData {
  
   constructor(private http: HttpClient) {}
   Url = 'http://localhost:3000/api/trips';

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
}
