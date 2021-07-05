import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportPascaComponent } from './import-export-pasca.component';

describe('ImportExportPascaComponent', () => {
  let component: ImportExportPascaComponent;
  let fixture: ComponentFixture<ImportExportPascaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportExportPascaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExportPascaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
