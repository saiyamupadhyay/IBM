import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverveComponent } from './overve.component';

describe('OverveComponent', () => {
  let component: OverveComponent;
  let fixture: ComponentFixture<OverveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
