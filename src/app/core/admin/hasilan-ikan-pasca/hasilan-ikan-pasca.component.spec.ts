import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasilanIkanPascaComponent } from './hasilan-ikan-pasca.component';

describe('HasilanIkanPascaComponent', () => {
  let component: HasilanIkanPascaComponent;
  let fixture: ComponentFixture<HasilanIkanPascaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasilanIkanPascaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasilanIkanPascaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
