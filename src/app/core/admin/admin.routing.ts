import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'ladang',
                children: [
                    {
                        path: 'pra',
                        component: LadangPraComponent
                    },
                    {
                        path: 'pasca',
                        component: LadangPascaComponent
                    }
                ]
            },
            {
                path: 'import-export',
                children: [
                    {
                        path: 'pra',
                        component: ImportExportPraComponent
                    },
                    {
                        path: 'pasca',
                        component: ImportExportPascaComponent
                    }
                ]
            },
            {
                path: 'kilang-ikan',
                children: [
                    {
                        path: 'pra',
                        component: KilangIkanPraComponent
                    },
                    {
                        path: 'pasca',
                        component: KilangIkanPascaComponent
                    }
                ]
            },
            {
                path: 'hasilan-ikan',
                children: [
                    {
                        path: 'pra',
                        component: HasilanIkanPraComponent
                    },
                    {
                        path: 'pasca',
                        component: HasilanIkanPascaComponent
                    }
                ]
            },
            {
                path: 'makmal-ikan',
                children: [
                    {
                        path: 'pra',
                        component: MakmalIkanPraComponent
                    },
                    {
                        path: 'pasca',
                        component: MakmalIkanPascaComponent
                    }
                ]
            },
            {
                path: 'hatcheri',
                children: [
                    {
                        path: 'pra',
                        component: HatcheriPraComponent
                    },
                    {
                        path: 'pasca',
                        component: HatcheriPascaComponent
                    }
                ]
            },
            {
                path: 'cites',
                children: [
                    {
                        path: 'pra',
                        component: CitesPraComponent
                    },
                    {
                        path: 'pasca',
                        component: CitesPascaComponent
                    }
                ]
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'tugasan-pegawai',
                component: TugasanPegawaiComponent
            },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]