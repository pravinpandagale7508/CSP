import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServiceComponentComponent } from './modal-service-component.component';

describe('ModalServiceComponentComponent', () => {
  let component: ModalServiceComponentComponent;
  let fixture: ComponentFixture<ModalServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalServiceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
