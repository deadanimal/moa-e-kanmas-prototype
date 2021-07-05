import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KilangIkanPraComponent } from './kilang-ikan-pra.component';

describe('KilangIkanPraComponent', () => {
  let component: KilangIkanPraComponent;
  let fixture: ComponentFixture<KilangIkanPraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KilangIkanPraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilangIkanPraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
