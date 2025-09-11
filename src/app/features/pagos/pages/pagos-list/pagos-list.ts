import { CommonModule, Time } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import pagos from '../../../../../assets/pagos.json';
import { FormsModule } from '@angular/forms';
import { Formulario } from "../../../dialogs/formulario/formulario";

export interface Trazabilidad {
  usuario: string;
  fecha: string;   // puedes usar Date si luego lo parseas
  nota: string;
}

export interface Facturacion {
  id: string;
  fecha: string;
  empresa: string;
  areaOperacion: string;
  rubro: string;
  tercero: string;
  valorOperacion: number;
  estadoPago: string;
  ingresoGasto: string;
  formaPago: string;
  tienePresupuesto: boolean;
  facturaUrl: string | null;
  soporteUrl: string | null;
  trazabilidad: Trazabilidad;
}

@Component({
  selector: 'app-pagos-list',
  imports: [
    CommonModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    FormsModule,
    ButtonModule,
    Formulario
],
  standalone: true,
  templateUrl: './pagos-list.html',
  styleUrl: './pagos-list.css'
})

export class PagosList implements OnInit {

  facturacion : any[] = []

  value:any;

  visibleForm : boolean = false;

  editarPagoArray! : Facturacion;

  estados = [
  { label: 'PENDIENTE', value: 'PENDIENTE' },
  { label: 'AUTORIZADO', value: 'AUTORIZADO' },
  { label: 'PAGADO', value: 'PAGADO' }
];

formasPago = [
  { label: 'EFECTIVO', value: 'EFECTIVO' },
  { label: 'TRANSFERENCIA', value: 'TRANSFERENCIA' },
  { label: 'TARJETA', value: 'TARJETA' }
];

  constructor(){

  }

  ngOnInit(): void {

    console.log(pagos);
    

    this.facturacion = [...pagos];
    
  }

  EditarPago(evento: any){
    this.visibleForm = true;
    this.editarPagoArray = evento;
  }
  

  CrearNuevo(evento: any){
    console.log(evento);
    
  }

}
