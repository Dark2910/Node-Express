import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guiatransporte',
  templateUrl: './guiatransporte.component.html',
  styleUrls: ['./guiatransporte.component.css']
})
export class GuiatransporteComponent implements OnInit {

  constructor(private route: Router, private Ruta:ActivatedRoute) { }

  ngOnInit(): void {
  }

  Paquemexinfo(){
    this.route.navigate(['paquemexinfo'])
  }

  Login(){
    this.route.navigate(['login'])
  }

  Register(){
    this.route.navigate(['register'])
  }
}
