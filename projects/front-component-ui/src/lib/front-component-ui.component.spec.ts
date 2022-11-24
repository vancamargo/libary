import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontComponentUiComponent } from './front-component-ui.component';

describe('FrontComponentUiComponent', () => {
  let component: FrontComponentUiComponent;
  let fixture: ComponentFixture<FrontComponentUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontComponentUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontComponentUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
