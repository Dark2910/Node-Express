import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviosComponent } from './pantallas/envios/envios.component';
import { GuiatransporteComponent } from './pantallas/guiatransporte/guiatransporte.component';
import { LoginComponent } from './pantallas/login/login.component';
import { NewtransportComponent } from './pantallas/newtransport/newtransport.component';
import { PaquemexinfoComponent } from './pantallas/paquemexinfo/paquemexinfo.component';
import { PaquetesComponent } from './pantallas/paquetes/paquetes.component';
import { RegisterComponent } from './pantallas/register/register.component';
import { RutasComponent } from './pantallas/rutas/rutas.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:  '', component:PrincipalComponent},
  {path:  'guiatransporte', component:GuiatransporteComponent},
  {path:  'login', component:LoginComponent},
  {path:  'paquemexinfo', component:PaquemexinfoComponent},
  {path:  'register', component:RegisterComponent},
  {path:  'newtransport', component:NewtransportComponent},
  {path:  'envios', component:EnviosComponent},
  {path:  'paquetes', component:PaquetesComponent},
  {path:  'rutas', component:RutasComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    RouterModule,
    FormsModule
  ]
})
export class AppRoutingModule { }
