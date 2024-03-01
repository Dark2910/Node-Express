import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantallasRoutingModule } from './pantallas-routing.module';
import { GuiatransporteComponent } from './guiatransporte/guiatransporte.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaquemexinfoComponent } from './paquemexinfo/paquemexinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewtransportComponent } from './newtransport/newtransport.component';
import { EnviosComponent } from './envios/envios.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { RutasComponent } from './rutas/rutas.component';


@NgModule({
  declarations: [
    GuiatransporteComponent,
    LoginComponent,
    RegisterComponent,
    PaquemexinfoComponent,
    NewtransportComponent,
    EnviosComponent,
    PaquetesComponent,
    RutasComponent
  ],
  imports: [
    CommonModule,
    PantallasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PantallasModule { }
