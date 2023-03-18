import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAppNavComponent } from './auth-app-nav.component';

describe('AuthAppNavComponent', () => {
  let component: AuthAppNavComponent;
  let fixture: ComponentFixture<AuthAppNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthAppNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthAppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
