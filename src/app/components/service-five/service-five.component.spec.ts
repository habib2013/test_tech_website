import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFiveComponent } from './service-five.component';

describe('ServiceFiveComponent', () => {
  let component: ServiceFiveComponent;
  let fixture: ComponentFixture<ServiceFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
