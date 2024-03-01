import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaServicioService,GetDB } from 'src/app/servicio/consulta-servicio.service';

@Component({
  selector: 'app-newtransport',
  templateUrl: './newtransport.component.html',
  styleUrls: ['./newtransport.component.css']
})

export class NewtransportComponent implements OnInit {

  lista:GetDB[]=[];

  constructor(private route: Router, private Ruta:ActivatedRoute, private ConsultaServicio:ConsultaServicioService) { }

  ngOnInit(): void {
    this.EjecutaGetDB();
  }

  EjecutaGetDB(){
    this.ConsultaServicio.URLgetDB().subscribe(
      res => {console.log(res)
      this.lista=res});
  }

  Paquemexinfo(){
    this.route.navigate(['paquemexinfo'])
  }
  Guia(){
    this.route.navigate(['guiatransporte'])
  }
}

