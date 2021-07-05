import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakmalIkanPascaComponent } from './makmal-ikan-pasca.component';

describe('MakmalIkanPascaComponent', () => {
  let component: MakmalIkanPascaComponent;
  let fixture: ComponentFixture<MakmalIkanPascaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakmalIkanPascaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakmalIkanPascaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
