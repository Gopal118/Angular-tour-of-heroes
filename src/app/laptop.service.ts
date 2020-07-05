import { Injectable } from '@angular/core';
import { MessagesService } from './messages.service';
import{Laptops} from './mock-laptops'

import { Laptop } from './laptop';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private messageService: MessagesService) {}

  getLaptops(): Observable<Laptop[]> {
  this.messageService.add('laptopService: fetched laptop');
  return of(Laptops);
}

getLaptop(id:number):Observable<Laptop>{
  this.messageService.add("laptop details ")
  return of(Laptops.find(laptop=>laptop.id==id));
}
}
