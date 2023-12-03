import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobleConstantsService {
  public TABS=[
    {name:"Customer finder",type:"cust"},
    {name:"Material finder",type:"gold"},
    {name:"opt 1",type:""},
    {name:"opt 2",type:""},
    {name:"opt 3",type:""},]
  public RELATIVE_URLS={
    "ADMIN":"/admin/adminHandler",
    "CUSTOMER":"/admin/adminHandler",
  }
}
