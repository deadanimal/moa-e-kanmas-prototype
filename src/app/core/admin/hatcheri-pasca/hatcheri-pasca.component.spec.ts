import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatcheriPascaComponent } from './hatcheri-pasca.component';

describe('HatcheriPascaComponent', () => {
  let component: HatcheriPascaComponent;
  let fixture: ComponentFixture<HatcheriPascaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatcheriPascaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatcheriPascaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
