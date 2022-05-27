import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTERS } from './app.routers';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ListarFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTERS),
    FuncionarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
