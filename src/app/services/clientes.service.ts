import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from '../models/cliente.model';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'https://mowin-test.firebaseio.com';

  constructor( private http: HttpClient) { }

  // Crea un nuevo cliente
  crearCliente(cliente: ClienteModel) {
    return this.http.post (`${this.url}/clientes.json`, cliente)
    .pipe(
      map((resp: any) => {
        cliente.nit = resp.name;
        return cliente;
      })
    );
  }
// Actualiza los clientes de la lista
  updateCliente(cliente: ClienteModel) {
    return this.http.put(`${this.url}/clientes/${ cliente.nit}.json`, cliente);
  }

// Elimina el campo del cliente seleccionado
  deleteCliente(nit: any) {
    return this.http.delete(`${this.url}/clientes/ ${nit}.json`);
    console.log(nit);
  }

  getClientes(nit: string) {
    return this.http.get(`${this.url}/clientes/ ${nit}.json`);
  }

  getCliente() {
    return this.http.get(`${this.url}/clientes.json`)
    .pipe(
      map( this.crearArreglo )
    );
  }

  private crearArreglo(clienteObj: object) {
    const cliente: ClienteModel[] = [];
    if (clienteObj === null) {return[]; }

    Object.keys (clienteObj).forEach( key => {
      const clientes: ClienteModel = clienteObj[key];
      clientes.nit = key;
      cliente.push(clientes);
    });

    return cliente;

  }

}
