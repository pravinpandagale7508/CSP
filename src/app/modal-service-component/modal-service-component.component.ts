import { Component, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CustomerComponent } from '../customer/customer.component';
import { IModalData } from '../specifications/IMModalData';

@Component({
  selector: 'app-modal-service-component',
  templateUrl: './modal-service-component.component.html',
  styleUrls: ['./modal-service-component.component.scss']
})
export class ModalServiceComponentComponent {
  
  constructor(private modal: NzModalService,private viewContainerRef: ViewContainerRef) {}


  
}
