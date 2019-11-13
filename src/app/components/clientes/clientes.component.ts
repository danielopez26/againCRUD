import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { NgForm } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = new ClienteModel();

  constructor( private clientesService: ClientesService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  guardar( form: NgForm) {
    if (form.invalid){
      console.log('Formulario no valido');
      return;
    }

    if (this.clientes.nit){
      this.clientesService.updateCliente(this.clientes).subscribe ( resp => {
        console.log(resp);
      });
    }

    else {
    this.clientesService.crearCliente(this.clientes).subscribe ( resp => {
      console.log(resp);
      this.clientes = resp;
    });

    }
  }


}
