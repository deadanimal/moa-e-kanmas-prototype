import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasilanIkanPraComponent } from './hasilan-ikan-pra.component';

describe('HasilanIkanPraComponent', () => {
  let component: HasilanIkanPraComponent;
  let fixture: ComponentFixture<HasilanIkanPraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasilanIkanPraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasilanIkanPraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
