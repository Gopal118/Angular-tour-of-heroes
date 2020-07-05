import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop';

@Component({
  selector: 'app-latops',
  templateUrl: './latops.component.html',
  styleUrls: ['./latops.component.css']
})
export class LatopsComponent implements OnInit {
  
  laptops:Laptop[];

  constructor(private laptopService:LaptopService) { }

  ngOnInit() {
    this.getLaptopDateails();
  }
  
    getLaptopDateails():void{
      this.laptopService.getLaptops()
      .subscribe(laptop=>this.laptops=laptop);
    }
  
}
