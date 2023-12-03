import { Component, Input, inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { IModalData } from '../specifications/IMModalData';
import { CustDtoBuilder } from '../DTO/CustDtoBuilder';
import { GlobleConstantsService } from '../globle-constants.service';
import { CustomerService } from '../services/customer.service';
import { CustomModelDialogService } from '../services/custom-model-dialog.service';
import { CustDto } from '../DTO/CustDto';
import { CustFilterDto } from '../DTO/CustFilterDto';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  public customerInfo:any;
  public custFilterDto:CustFilterDto;
  public customers:CustDto[]=[];
  public name:string = "";
  public custDtoBuilder :CustDtoBuilder;
  subject: Subject<void> = new Subject();
  constructor(private constants: GlobleConstantsService,private customerService:CustomerService,private customModelDialogService:CustomModelDialogService) { 
   
    this.custDtoBuilder = CustDtoBuilder.getInstance();
    this.custFilterDto = this.custDtoBuilder.setOpcode("getCRMsPaginationFilter").build();
    this.subject
            .pipe(debounceTime(500))
            .subscribe(() => {
              this.getInfo();
                }
            );
  }
  ngOnInit(): void {
    
    this.getInfo();
    this.name="20"
    console.log(this.customerInfo)
  }
  
  onKeyUp(value:string){
    switch(value) {
      case 'companyName':
        this.custDtoBuilder.setOpcode("getCRMsPaginationFilter").setCompanyName(this.custFilterDto.companyName);
        this.subject.next();
        
        break;
      case "crmId":
        this.custDtoBuilder.setOpcode("getCRMsPaginationFilter").setCrmId(this.custFilterDto.crmId);
        this.subject.next();
        break;
        case "address":
          this.custDtoBuilder.setOpcode("getCRMsPaginationFilter").setAddress(this.custFilterDto.address);
          this.subject.next();
        break;
        case "countryId":
          this.custDtoBuilder.setOpcode("getCRMsPaginationFilter").setCountryId(this.custFilterDto.countryId);
          this.subject.next();
        break;
        case "agentId":
          this.custDtoBuilder.setOpcode("getCRMsPaginationFilter").setAgentId(this.custFilterDto.agentId);
          this.subject.next();
        break;
        case "networkId":
          this.custDtoBuilder.setOpcode("getCRMsPaginationFilter").setNetworkId(this.custFilterDto.networkId);
          this.subject.next();
        break;
      default:
        //this.custFilterDto = this.custDtoBuilder.setOpcode("getCRMsPaginationFilter").build();
    }
  }
  getInfo(){
    console.log(this.custFilterDto)
    console.log("ASD")
    this.customerService.getCustomers(this.custDtoBuilder.setOpcode("getCRMsPaginationFilter").build()).subscribe((response: any) => {
      console.log(response);
      this.customerInfo  = response;
      this.customers  = response.data?.list;
    });
  }
  
  @Input() title?: string;
  @Input() subtitle?: string;

  readonly #modal = inject(NzModalRef);
  readonly nzModalData: any = inject(NZ_MODAL_DATA);

  destroyModal(): void {
    this.#modal.destroy({ data: 'this the result data' });
  }
}
