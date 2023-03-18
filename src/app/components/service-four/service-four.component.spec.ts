import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFourComponent } from './service-four.component';

describe('ServiceFourComponent', () => {
  let component: ServiceFourComponent;
  let fixture: ComponentFixture<ServiceFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
