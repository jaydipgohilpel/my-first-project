import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialuiComponent } from './materialui.component';

describe('MaterialuiComponent', () => {
  let component: MaterialuiComponent;
  let fixture: ComponentFixture<MaterialuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
