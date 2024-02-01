import { Component, OnInit } from '@angular/core';
import { SeatsServicesService } from '../service/seats-services.service';
import { Seat } from '../models/seat.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.css'],
})
export class SeatLayoutComponent implements OnInit {
  numberOfSeats: string = '';
  seats: Seat[] = [];

  constructor(private seatService: SeatsServicesService) {}

  ngOnInit() {
    this.getAllSeats()
  }

  getAllSeats() {
    this.seatService.getSeats().subscribe((seats: Seat[]) => {
      this.seats = seats;
    }),
      (error: any) => {
        console.error('error in retrivnig', error);
      };
  }

  bookSeats() {
    try {
      this.seatService
        .bookAvailableSeat(this.numberOfSeats)
        .subscribe((res) => {
          alert(res.message);
        });
        window.location.reload();
    } catch (error: any) {
      console.error(error.message);
    }
  }
}
