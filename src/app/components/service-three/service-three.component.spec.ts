import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceThreeComponent } from './service-three.component';

describe('ServiceThreeComponent', () => {
  let component: ServiceThreeComponent;
  let fixture: ComponentFixture<ServiceThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
