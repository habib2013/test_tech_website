import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeWaysComponent } from './three-ways.component';

describe('ThreeWaysComponent', () => {
  let component: ThreeWaysComponent;
  let fixture: ComponentFixture<ThreeWaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeWaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
