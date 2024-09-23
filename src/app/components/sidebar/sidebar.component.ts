import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path:   string;
  title:  string;
  icon:   string;
  class:  string;
  children?: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/stock', title: 'Stock', icon: 'ni-planet text,bkue', class: ''},
  { path: '/pedido', title: 'Pedido', icon: 'ni-pin-3', class:''},
  { path: '/compra', title: 'Compra', icon:'', class: '', children: [
    {
      path: 'balance-compra', title: 'Balance compra', icon: '' , class: ''
    },
    {
      path: 'historial-compra', title: 'Historial compra', icon: '', class: ''
    }
  ]},
  { path: '/venta', title: 'Venta', icon: '', class: '', children: [
    {
      path: 'balance-venta', title: 'Balance venta', icon: '', class: ''
    },
    {
      path: 'historial-venta', title: 'Historial venta', icon: '', class: ''
    }
  ]},
  { path: '/producto', title: 'Producto', icon: '', class: '', children: [
    {
      path: 'product-list', title: 'Product list', icon: '', class: ''
    },
    {
      path: 'product-form', title: 'Product form', icon: '', class: ''
    },
    {
      path: 'product-detail', title: 'Product detail', icon: '', class: ''
    }
  ]}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit{

  public menuItems!: any[];
  public isCollapsed = true;

  constructor (private router: Router) { }

ngOnInit(): void {
  this.menuItems = ROUTES.filter(menuItems => this.menuItems);
  this.router.events.subscribe((event) => {
    this.isCollapsed = true;
  });
}
}
