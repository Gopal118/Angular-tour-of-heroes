import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop';
import { Location } from '@angular/common';


@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {

  laptop: Laptop;

  constructor(
    private route: ActivatedRoute,
    private laptopService: LaptopService,
    private location: Location
  ) { }
  ngOnInit(): void {
this.getLaptop();
  }

  getLaptop(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.laptopService.getLaptop(id)
      .subscribe(laptop => this.laptop = laptop)
  }

  goBack():void{
    this.location.back();
  }
}
