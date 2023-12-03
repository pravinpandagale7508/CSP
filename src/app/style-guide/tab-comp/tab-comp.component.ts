import { Component, Input, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CustomerComponent } from 'src/app/customer/customer.component';
import { CustomModelDialogService } from 'src/app/services/custom-model-dialog.service';
import { IModalData } from 'src/app/specifications/IMModalData';

@Component({
  selector: 'app-tab-comp',
  templateUrl: './tab-comp.component.html',

  styles: [
    `
      [nz-button] {
        position:absolute;
        margin-right: 8px;
        margin-bottom: 12px;
        padding:0px;
        display:block;
        padding: 2px 22px;
      }
    `
  ]
})
export class TabCompComponent {
  @Input() data: any= {name:""};
  constructor(private modal: NzModalService,private viewContainerRef: ViewContainerRef) { 
    
  }
  createCustomerComponentModal(): void {
    
    const modal = this.modal.create<CustomerComponent, IModalData>({
      nzTitle: '',
      nzStyle:{width:"90vw",top:"3.5vw",height:"90vh",overflow:"auto"},
      nzBodyStyle:{width:"90vw",height:"90vh",maxHeight:"80vh",overflow:"auto"},
      nzContent: CustomerComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzData: {
        favoriteLibrary: 'angular',
        favoriteFramework: 'angular'
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    setTimeout(() => {
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }
}
