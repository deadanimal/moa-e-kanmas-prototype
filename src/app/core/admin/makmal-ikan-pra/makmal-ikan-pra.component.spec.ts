import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakmalIkanPraComponent } from './makmal-ikan-pra.component';

describe('MakmalIkanPraComponent', () => {
  let component: MakmalIkanPraComponent;
  let fixture: ComponentFixture<MakmalIkanPraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakmalIkanPraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakmalIkanPraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
