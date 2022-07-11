import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidTutorialsComponent } from './paid-tutorials.component';

describe('PaidTutorialsComponent', () => {
  let component: PaidTutorialsComponent;
  let fixture: ComponentFixture<PaidTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
