import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatcheriPraComponent } from './hatcheri-pra.component';

describe('HatcheriPraComponent', () => {
  let component: HatcheriPraComponent;
  let fixture: ComponentFixture<HatcheriPraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatcheriPraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatcheriPraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
