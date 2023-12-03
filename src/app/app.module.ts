import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData,CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
registerLocaleData(en);
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { CustTabComponent } from './style-guide/cust-tab/cust-tab.component';
import { TabCompComponent } from './style-guide/tab-comp/tab-comp.component';
import { CustomerComponent } from './customer/customer.component';
const ngZorroConfig: NzConfig = {
  theme: {
    primaryColor: '#1890ff'
  }
};
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CustTabComponent,
    TabCompComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule, 
    NzGridModule,
    DemoNgZorroAntdModule,
    CommonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },{ provide: NZ_CONFIG, useValue:  ngZorroConfig  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
