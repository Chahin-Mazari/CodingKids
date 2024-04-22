import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/alert',
    title: 'Evenements',
    icon: 'bi bi-bell',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/badges',
    title: 'Formation',
    icon: 'bi bi-patch-check',
    class: '',
    extralink: false,
    submenu: []
  },

  {
    path: '/component/table',
    title: 'Elève',
    icon: 'bi bi-layout-split',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/about',
    title: 'About',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: []
  }
];
