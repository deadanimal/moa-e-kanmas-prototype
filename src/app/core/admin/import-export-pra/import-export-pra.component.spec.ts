import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportPraComponent } from './import-export-pra.component';

describe('ImportExportPraComponent', () => {
  let component: ImportExportPraComponent;
  let fixture: ComponentFixture<ImportExportPraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportExportPraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExportPraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
