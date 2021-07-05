import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import{ MatStepperModule } from '@angular/material/stepper';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { LadangPraComponent } from './ladang-pra/ladang-pra.component';
import { LadangPascaComponent } from './ladang-pasca/ladang-pasca.component';
import { ImportExportPraComponent } from './import-export-pra/import-export-pra.component';
import { ImportExportPascaComponent } from './import-export-pasca/import-export-pasca.component';
import { KilangIkanPraComponent } from './kilang-ikan-pra/kilang-ikan-pra.component';
import { KilangIkanPascaComponent } from './kilang-ikan-pasca/kilang-ikan-pasca.component';
import { HasilanIkanPraComponent } from './hasilan-ikan-pra/hasilan-ikan-pra.component';
import { HasilanIkanPascaComponent } from './hasilan-ikan-pasca/hasilan-ikan-pasca.component';
import { MakmalIkanPraComponent } from './makmal-ikan-pra/makmal-ikan-pra.component';
import { MakmalIkanPascaComponent } from './makmal-ikan-pasca/makmal-ikan-pasca.component';
import { HatcheriPraComponent } from './hatcheri-pra/hatcheri-pra.component';
import { HatcheriPascaComponent } from './hatcheri-pasca/hatcheri-pasca.component';
import { CitesPraComponent } from './cites-pra/cites-pra.component';
import { CitesPascaComponent } from './cites-pasca/cites-pasca.component';
import { TugasanPegawaiComponent } from './tugasan-pegawai/tugasan-pegawai.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    LadangPraComponent,
    LadangPascaComponent,
    ImportExportPraComponent,
    ImportExportPascaComponent,
    KilangIkanPraComponent,
    KilangIkanPascaComponent,
    HasilanIkanPraComponent,
    HasilanIkanPascaComponent,
    MakmalIkanPraComponent,
    MakmalIkanPascaComponent,
    HatcheriPraComponent,
    HatcheriPascaComponent,
    CitesPraComponent,
    CitesPascaComponent,
    TugasanPegawaiComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    MatStepperModule,
    CdkStepperModule

  ]
})
export class AdminModule { }
