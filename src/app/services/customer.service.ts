import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviornment/enviornment';
import { GlobleConstantsService } from '../globle-constants.service';
import { CustFilterDto } from '../DTO/CustFilterDto';
import { CustDto } from '../DTO/CustDto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = environment.apiUrl;
  //customers:CustDto=[];
  constructor(private http: HttpClient,private constant:GlobleConstantsService) {
  }
  getCustomers(custDto:CustFilterDto): Observable<any> {   
    console.log(JSON.parse(JSON.stringify( custDto))) 
    let request = JSON.parse(JSON.stringify( custDto));
    console.log("Pravin") 
    return this.http.post<any>(this.apiUrl+this.constant.RELATIVE_URLS.CUSTOMER,request.custDtoBuilder);
  }
}
