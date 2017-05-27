import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsDescriptionComponent } from './functions-description.component';

describe('FunctionsDescriptionComponent', () => {
  let component: FunctionsDescriptionComponent;
  let fixture: ComponentFixture<FunctionsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
