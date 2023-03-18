import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSixComponent } from './service-six.component';

describe('ServiceSixComponent', () => {
  let component: ServiceSixComponent;
  let fixture: ComponentFixture<ServiceSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
