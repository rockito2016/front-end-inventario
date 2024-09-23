import { Component } from '@angular/core';

declare interface RouteInfo {
  path:   string;
  title:  string;
  icon:   string;
  class:  string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/stock', title: 'Stock', icon: 'ni-planet text,bkue', class: ''},
  { path: '/pedido', title: 'Pedido', icon: 'ni-pin-3', class:''},
  { path: '/compra', title: 'Compra', icon:'', class: ''},
  { path: '/venta', title: 'Venta', icon: '', class: ''},
  { path: '/producto', title: 'Producto', icon: '', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {



}
