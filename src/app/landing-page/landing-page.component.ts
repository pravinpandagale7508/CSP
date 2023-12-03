import { Component, OnInit } from '@angular/core';
import { GlobleConstantsService } from '../globle-constants.service';
import { CustomerService } from '../services/customer.service';
import { CustDtoBuilder } from '../DTO/CustDtoBuilder';
import { CustFilterDto } from '../DTO/CustFilterDto';
import { CustomModelDialogService } from '../services/custom-model-dialog.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers:[GlobleConstantsService,CustomerService]
})
export class LandingPageComponent implements OnInit {
  public tabs:any;
  public customers:any;
  public custDtoBuilder :CustDtoBuilder;
  constructor(private constants: GlobleConstantsService,private customerService:CustomerService,private customModelDialogService:CustomModelDialogService) { 
    this.tabs = constants.TABS;
    this.custDtoBuilder = CustDtoBuilder.getInstance();
  }
  ngOnInit(): void {
    this.customers= this.customerService.getCustomers(this.custDtoBuilder.setOpcode("getCRMsPaginationFilter").build());
  }
  mode = 'list';
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    } // ... more items
  ];
  
}
