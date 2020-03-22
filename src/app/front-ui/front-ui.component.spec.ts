import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontUIComponent } from './front-ui.component';

describe('FrontUIComponent', () => {
  let component: FrontUIComponent;
  let fixture: ComponentFixture<FrontUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
