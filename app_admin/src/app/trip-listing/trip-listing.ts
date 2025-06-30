import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card';

import { TripData } from '../services/trip-data'; 
import { Trip } from '../models/trip';

import { Router } from '@angular/router';

import { Authentication } from '../services/authentication';


@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  providers: [TripData],                                   
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {
   trips!: Trip[];
   message: string = '';

  // d. Creating a constructor to initialize the TripDataService
  constructor(
    private tripDataService: TripData,
    private router: Router,
    private authenticationService: Authentication
    ) {
    console.log('trip-listing constructor');
  }
  public addTrip(): void {
    this.router.navigate(['/add-trip']);
  }

  // e. Creating a method that will call the getTrips() method in TripDataService
  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          if (value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          } else {
            this.message = 'There were no trips retrieved from the database';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

  // f. And creating an ngOnInit method that will call our private method when the component is initialized
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

    public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}


