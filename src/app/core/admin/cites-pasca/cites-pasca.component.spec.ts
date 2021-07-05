import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitesPascaComponent } from './cites-pasca.component';

describe('CitesPascaComponent', () => {
  let component: CitesPascaComponent;
  let fixture: ComponentFixture<CitesPascaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitesPascaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitesPascaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
