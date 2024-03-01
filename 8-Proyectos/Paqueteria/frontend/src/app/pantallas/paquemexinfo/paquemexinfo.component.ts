import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paquemexinfo',
  templateUrl: './paquemexinfo.component.html',
  styleUrls: ['./paquemexinfo.component.css']
})
export class PaquemexinfoComponent implements OnInit {

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
