import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOneComponent } from './service-one.component';

describe('ServiceOneComponent', () => {
  let component: ServiceOneComponent;
  let fixture: ComponentFixture<ServiceOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
