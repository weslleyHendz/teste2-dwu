import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './../content/content.component';
import { CadastroClientesComponent } from './../cadastro-clientes/cadastro-clientes.component';
import { AuthGuard } from 'src/auth.guard';
import { LoginComponent } from '../login/login.component';
import { AcessoNegadoComponent } from '../acesso-negado/acesso-negado.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  // { path: 'cadastro-clientes', component: CadastroClientesComponent, canActivate: [AuthGuard] },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'login', component: LoginComponent},
  { path: 'acesso-negado', component: AcessoNegadoComponent },

  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
