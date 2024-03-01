import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router, private Ruta:ActivatedRoute) { }

  ngOnInit(): void {
  }

  Paquemexinfo(){
    this.route.navigate(['paquemexinfo'])
  }

  Login(){
    this.route.navigate(['login'])
  }

}
