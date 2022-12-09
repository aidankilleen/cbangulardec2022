import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBootstrapNavComponent } from './angular-bootstrap-nav.component';

describe('AngularBootstrapNavComponent', () => {
  let component: AngularBootstrapNavComponent;
  let fixture: ComponentFixture<AngularBootstrapNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularBootstrapNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularBootstrapNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
