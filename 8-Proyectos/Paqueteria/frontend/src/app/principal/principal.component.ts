import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  bandera:boolean = false;
  bandera1:boolean = false;

  constructor(private route: Router, private Ruta:ActivatedRoute) { }

  ngOnInit(): void {
  }

  MostrarBarra(){
    return this.bandera = true;
    }
    Buscar(){
      if(!this.bandera1){
       this.bandera1 = true;
      }else{
        this.bandera1 = false;
      }
    }
  Paquemexinfo(){
    this.route.navigate(['paquemexinfo'])
  }
  Guia(){
    this.route.navigate(['guiatransporte'])
  }
  Login(){
    this.route.navigate(['login'])
  }
  Register(){
    this.route.navigate(['register'])
  }

}
