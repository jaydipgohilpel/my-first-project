import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDiStyleComponent } from './custom-di-style.component';

describe('CustomDiStyleComponent', () => {
  let component: CustomDiStyleComponent;
  let fixture: ComponentFixture<CustomDiStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDiStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDiStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
