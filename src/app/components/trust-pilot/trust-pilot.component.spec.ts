import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustPilotComponent } from './trust-pilot.component';

describe('TrustPilotComponent', () => {
  let component: TrustPilotComponent;
  let fixture: ComponentFixture<TrustPilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustPilotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
