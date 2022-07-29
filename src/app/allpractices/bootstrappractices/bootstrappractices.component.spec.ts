import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrappracticesComponent } from './bootstrappractices.component';

describe('BootstrappracticesComponent', () => {
  let component: BootstrappracticesComponent;
  let fixture: ComponentFixture<BootstrappracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrappracticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrappracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
