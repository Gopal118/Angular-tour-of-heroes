import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatopsComponent } from './latops.component';

describe('LatopsComponent', () => {
  let component: LatopsComponent;
  let fixture: ComponentFixture<LatopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
