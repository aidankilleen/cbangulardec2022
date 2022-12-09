import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalAngularBootstrapComponent } from './user-modal-angular-bootstrap.component';

describe('UserModalAngularBootstrapComponent', () => {
  let component: UserModalAngularBootstrapComponent;
  let fixture: ComponentFixture<UserModalAngularBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModalAngularBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserModalAngularBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
