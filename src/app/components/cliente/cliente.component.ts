import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModel } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: ClienteModel[] = [];

  constructor( private clientesServices: ClientesService) { }

  ngOnInit() {
    this.clientesServices.getCliente().subscribe(resp => this.cliente = resp
    );
  }

  borrarCliente(cliente: ClienteModel) {
    this.clientesServices.deleteCliente(cliente.nit).subscribe();

  }
}
