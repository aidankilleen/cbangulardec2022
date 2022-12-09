import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBootstrapNavComponent } from './simple-bootstrap-nav.component';

describe('SimpleBootstrapNavComponent', () => {
  let component: SimpleBootstrapNavComponent;
  let fixture: ComponentFixture<SimpleBootstrapNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleBootstrapNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleBootstrapNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
