import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaServicioService {

  urlget = 'http://localhost:3000/r/paqueteria/get';
  urlgetfk = 'http://localhost:3000/r/paqueteria/getFK';
  urlpost = 'http://localhost:3000/r/paqueteria/post';

  urlput = 'http://localhost:3000/r/paqueteria/put/';
  urldelete = 'http://localhost:3000/r/paqueteria/delete/';

  constructor (private http:HttpClient){
    console.log("Servidor Corriendo");
  }

  URLgetDB():Observable<any>{
    return this.http.get(this.urlget);
  }

  URLgetFKDB():Observable<any>{
    return this.http.get(this.urlgetfk);
  }

  URLpostDB(DatosDB:DatosDB):Observable<any>{
    console.log("Servicio POST", DatosDB.fk_clientes, DatosDB.fk_envios, DatosDB.fk_tp_paquete, DatosDB.fk_pago);
    return this.http.post(this.urlpost, DatosDB);
  }

  URLputDB(DatosDB:DatosDB){
    console.log('Service put ', this.urlput + DatosDB.id_paquete)
    return this.http.put(this.urlput + DatosDB.id_paquete, DatosDB);
  }

  URLdeleteDB(id_paquete:any){
    console.log('Service Eliminar',id_paquete)
    return this.http.delete(this.urldelete + id_paquete);
  }
}

export interface GetDB{
  id_paquete?: number;
  nombre_cliente?: string;
  dir_envio?: string;
  contenido?: string;
  tp_pago?: string;
}

export interface DatosDB{
  fk_pago?: number;
  fk_tp_paquete?: number;
  fk_clientes?: number;
  fk_envios?: number;
  id_paquete?: number;
}


