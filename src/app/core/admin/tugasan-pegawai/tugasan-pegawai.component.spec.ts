import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TugasanPegawaiComponent } from './tugasan-pegawai.component';

describe('TugasanPegawaiComponent', () => {
  let component: TugasanPegawaiComponent;
  let fixture: ComponentFixture<TugasanPegawaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TugasanPegawaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TugasanPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
