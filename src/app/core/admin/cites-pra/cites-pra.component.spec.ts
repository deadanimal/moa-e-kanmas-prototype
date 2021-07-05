import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitesPraComponent } from './cites-pra.component';

describe('CitesPraComponent', () => {
  let component: CitesPraComponent;
  let fixture: ComponentFixture<CitesPraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitesPraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitesPraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
