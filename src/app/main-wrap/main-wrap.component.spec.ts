import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWrapComponent } from './main-wrap.component';

describe('MainWrapComponent', () => {
  let component: MainWrapComponent;
  let fixture: ComponentFixture<MainWrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainWrapComponent]
    });
    fixture = TestBed.createComponent(MainWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
