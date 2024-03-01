import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos !: FormGroup;

  constructor(private route: Router, private Ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.validar();
  }

  validar(){
    this.datos=new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required])
    })
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
