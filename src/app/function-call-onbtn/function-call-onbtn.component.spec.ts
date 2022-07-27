import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCallOnbtnComponent } from './function-call-onbtn.component';

describe('FunctionCallOnbtnComponent', () => {
  let component: FunctionCallOnbtnComponent;
  let fixture: ComponentFixture<FunctionCallOnbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionCallOnbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionCallOnbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
