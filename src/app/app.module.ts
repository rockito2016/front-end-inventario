import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

/* import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; */

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { ProveedorComponent } from './pages/pedido/proveedor/proveedor.component';
import { TransportadorComponent } from './pages/pedido/transportador/transportador.component';
import { ProductDetailComponent } from './pages/producto/product-detail/product-detail.component';
import { ProductFormComponent } from './pages/producto/product-form/product-form.component';
import { ProductListComponent } from './pages/producto/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ProveedorComponent,
    TransportadorComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    //NgbModule,
    RouterModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
