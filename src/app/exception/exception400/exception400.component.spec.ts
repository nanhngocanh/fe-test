import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exception400Component } from './exception400.component';

describe('Exception400Component', () => {
  let component: Exception400Component;
  let fixture: ComponentFixture<Exception400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exception400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exception400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
