import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustTabComponent } from './cust-tab.component';

describe('CustTabComponent', () => {
  let component: CustTabComponent;
  let fixture: ComponentFixture<CustTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
