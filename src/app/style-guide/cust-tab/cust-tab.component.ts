import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, NgModule, TemplateRef } from '@angular/core';
import { CustomModelDialogService } from 'src/app/services/custom-model-dialog.service';

@Component({
  selector: 'app-cust-tab',
  templateUrl: './cust-tab.component.html',
  styleUrls: ['./cust-tab.component.scss']
})
export class CustTabComponent<T extends { description: string; title: string }> {
  @Input() cardRef!: TemplateRef<any>;
  @Input() item!: {name:string,type:string};
  
}

@NgModule({
  imports:[CommonModule]
})
export class CustTabModule{}
