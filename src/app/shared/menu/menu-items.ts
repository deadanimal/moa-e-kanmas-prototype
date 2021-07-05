export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-success'
  },
  {
    path: '/admin/ladang',
    title: 'Pendaftaran Ladang',
    type: 'sub',
    icontype: 'fas fa-tractor text-success',
    collapse: 'ladang',
    isCollapsed: true,
    children: [
      { path: 'pra', title: 'Pra-Pemeriksaan', type: 'link' },
      { path: 'pasca', title: 'Pasca-Pemeriksaan', type: 'link' }
    ]
  },
  {
    path: '/admin/import-export',
    title: 'Pendaftaran Pengimport/Pengeksport',
    type: 'sub',
    icontype: 'fas fa-exchange-alt text-success',
    collapse: 'import-export',
    isCollapsed: true,
    children: [
      { path: 'pra', title: 'Pra-Pemeriksaan', type: 'link' },
      { path: 'pasca', title: 'Pasca-Pemeriksaan', type: 'link' }
    ]
  },
  {
    path: '/admin/kilang-ikan',
    title: 'Pendaftaran Kilang Makanan Ikan, Tepung Ikan, Minyak Ikan',
    type: 'sub',
    icontype: 'fas fa-fish text-success',
    collapse: 'kilang-ikan',
    isCollapsed: true,
    children: [
      { path: 'pra', title: 'Pra-Pemeriksaan', type: 'link' },
      { path: 'pasca', title: 'Pasca-Pemeriksaan', type: 'link' }
    ]
  },
  {
    path: '/admin/hasilan-ikan',
    title: 'Pendaftaran Kilang Hasilan Ikan',
    type: 'sub',
    icontype: 'fas fa-industry text-success',
    collapse: 'hasilan-ikan',
    isCollapsed: true,
    children: [
      { path: 'pra', title: 'Pra-Pemeriksaan', type: 'link' },
      { path: 'pasca', title: 'Pasca-Pemeriksaan', type: 'link' }
    ]
  },
  {
    path: '/admin/makmal-ikan',
    title: 'Pendaftaran Maklumat Kesihatan Ikan',
    type: 'sub',
    icontype: 'fas fa-heartbeat text-success',
    collapse: 'makmal-ikan',
    isCollapsed: true,
    children: [
      { path: 'pra', title: 'Pra-Pemeriksaan', type: 'link' },
      { path: 'pasca', title: 'Pasca-Pemeriksaan', type: 'link' }
    ]
  },
  {
    path: '/admin/hatcheri',
    title: 'Pendaftaran Hatcheri Induk Luar Negara',
    type: 'sub',
    icontype: 'fas fa-globe-asia text-success',
    collapse: 'hatcheri',
    isCollapsed: true,
    children: [
      { path: 'pra', title: 'Pra-Pemeriksaan', type: 'link' },
      { path: 'pasca', title: 'Pasca-Pemeriksaan', type: 'link' }
    ]
  },
  {
    path: '/admin/cites',
    title: 'Pendaftaran CITES',
    type: 'sub',
    icontype: 'fas fa-water text-success',
    collapse: 'cites',
    isCollapsed: true,
    children: [
      { path: 'pra', title: 'Pra-Pemeriksaan', type: 'link' },
      { path: 'pasca', title: 'Pasca-Pemeriksaan', type: 'link' }
    ]
  },
  {
    path: '/admin/tugasan-pegawai',
    title: 'Tugasan Pegawai',
    type: 'link',
    icontype: 'fas fa-user-tie text-success'
  },
  {
    path: '/admin/report',
    title: 'Laporan',
    type: 'link',
    icontype: 'fas fa-chart-bar text-success'
  },
  /*
  {
    path: '/admin/management',
    title: 'Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' }
    ]
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];