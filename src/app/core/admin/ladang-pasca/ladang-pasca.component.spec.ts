import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadangPascaComponent } from './ladang-pasca.component';

describe('LadangPascaComponent', () => {
  let component: LadangPascaComponent;
  let fixture: ComponentFixture<LadangPascaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadangPascaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadangPascaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
