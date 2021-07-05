import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KilangIkanPascaComponent } from './kilang-ikan-pasca.component';

describe('KilangIkanPascaComponent', () => {
  let component: KilangIkanPascaComponent;
  let fixture: ComponentFixture<KilangIkanPascaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KilangIkanPascaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilangIkanPascaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
