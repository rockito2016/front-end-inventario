import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { StockComponent } from '../../pages/stock/stock.component';
import { PedidoComponent } from '../../pages/pedido/pedido.component';
import { CompraComponent } from '../../pages/compra/compra.component';
import { BalanceCompraComponent } from '../../pages/compra/balance-compra/balance-compra.component';
import { HistorialCompraComponent } from '../../pages/compra/historial-compra/historial-compra.component';
import { VentaComponent } from '../../pages/venta/venta.component';
import { BalanceVentaComponent } from '../../pages/venta/balance-venta/balance-venta.component';
import { HistorialVentaComponent } from '../../pages/venta/historial-venta/historial-venta.component';
import { ProductoComponent } from '../../pages/producto/producto.component';
import { ProductDetailComponent } from '../../pages/producto/product-detail/product-detail.component';
import { ProductFormComponent } from '../../pages/producto/product-form/product-form.component';
import { ProductListComponent } from '../../pages/producto/product-list/product-list.component';

export const AdminLayoutRouter: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stock', component: StockComponent },
  {
    path: 'pedido', component: PedidoComponent
  },
  {
    path: 'compra', component: CompraComponent, children: [
      {
        path: 'balance-compra', component: BalanceCompraComponent
      },
      {
        path: 'historial-compra', component: HistorialCompraComponent
      }
    ]
  },
  {
    path: 'venta', component: VentaComponent, children: [
      {
        path: 'balance-venta', component: BalanceVentaComponent
      },
      {
        path: 'historial-venta', component: HistorialVentaComponent
      }
    ]
  },
  {
    path: 'producto', component: ProductoComponent, children: [
      {
        path: 'producto-detail', component: ProductDetailComponent
      },
      {
        path: 'product-form', component: ProductFormComponent
      },
      {
        path: 'product-list', component: ProductListComponent
      }
    ]
  }
]
