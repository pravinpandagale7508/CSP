
import { NgModule } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
@NgModule({
  exports: [
    NzGridModule,
    NzButtonModule,
    NzLayoutModule,
    NzIconModule,
    NzModalModule,
    NzTableModule,
    NzDividerModule,
    NzInputModule
  ]
})
export class DemoNgZorroAntdModule {

}
