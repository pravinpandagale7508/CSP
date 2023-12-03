import { Injectable } from '@angular/core';
import { Customer } from '../Model/Customer';
import { Material } from '../Model/Material';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  createCar(type: string) {
    switch (type) {
      case 'customer':
        return new Customer();
      case 'material':
        return new Material();
      default:
        throw new Error('Invalid Finder');
    }
  }
}
