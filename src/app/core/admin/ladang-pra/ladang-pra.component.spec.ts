import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadangPraComponent } from './ladang-pra.component';

describe('LadangPraComponent', () => {
  let component: LadangPraComponent;
  let fixture: ComponentFixture<LadangPraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadangPraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadangPraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
