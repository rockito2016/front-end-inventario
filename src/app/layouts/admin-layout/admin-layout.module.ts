import { NgModule } from '@angular/core';

import { AdminLayoutRouter } from './admin-layout.routing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompraComponent } from '../../pages/compra/compra.component';
import { BalanceCompraComponent } from '../../pages/compra/balance-compra/balance-compra.component';
import { HistorialCompraComponent } from '../../pages/compra/historial-compra/historial-compra.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { PedidoComponent } from '../../pages/pedido/pedido.component';
import { ProveedorComponent } from '../../pages/pedido/proveedor/proveedor.component';
import { TransportadorComponent } from '../../pages/pedido/transportador/transportador.component';
import { ProductoComponent } from '../../pages/producto/producto.component';
import { ProductDetailComponent } from '../../pages/producto/product-detail/product-detail.component';
import { ProductFormComponent } from '../../pages/producto/product-form/product-form.component';
import { ProductListComponent } from '../../pages/producto/product-list/product-list.component';
import { StockComponent } from '../../pages/stock/stock.component';
import { VentaComponent } from '../../pages/venta/venta.component';
import { BalanceVentaComponent } from '../../pages/venta/balance-venta/balance-venta.component';
import { HistorialVentaComponent } from '../../pages/venta/historial-venta/historial-venta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRouter),
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [
    CompraComponent,
    BalanceCompraComponent,
    HistorialCompraComponent,
    DashboardComponent,
    PedidoComponent,
    ProveedorComponent,
    TransportadorComponent,
    ProductoComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductListComponent,
    StockComponent,
    VentaComponent,
    BalanceVentaComponent,
    HistorialVentaComponent
  ],
  providers: [],
})
export class AdminLayoutModule { }
