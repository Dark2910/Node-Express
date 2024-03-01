import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  constructor(private route: Router, private Ruta:ActivatedRoute) { }


  ngOnInit(): void {
  }
  Paquemexinfo(){
    this.route.navigate(['paquemexinfo'])
  }
  Guia(){
    this.route.navigate(['guiatransporte'])
  }

}
