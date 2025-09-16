import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Facturacion } from '../../pagos/pages/pagos-list/pagos-list';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
@Component({
  selector: 'app-formulario',
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule
],
  standalone : true,
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario  implements OnInit,OnChanges{
  @Input() EditarVisible : boolean = false
  @Output() EditvisibleForm = new EventEmitter<boolean>();
  @Input() editarPagoarray! : Facturacion; 
  @Output() FormEdit = new EventEmitter<Facturacion>();

  formeditar!: FormGroup<any>

  
  Editar:boolean = false;
  
  
  
  noVisible(){
    this.EditvisibleForm.emit(false)
  }

   constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
     this.formeditar = this.fb.group({
       id: [this.editarPagoarray?.id],
       empresa: [this.editarPagoarray?.empresa || '', Validators.required],
       rubro: [this.editarPagoarray?.rubro || '', Validators.required],
       areaOperacion: [this.editarPagoarray?.areaOperacion || '', Validators.required],
       tercero: [this.editarPagoarray?.tercero || '', Validators.required],
       valorOperacion: [this.editarPagoarray?.valorOperacion || 0, [Validators.required, Validators.min(1)]],
       estadoPago: [this.editarPagoarray?.estadoPago || null, Validators.required],
       formaPago: [this.editarPagoarray?.formaPago || null, Validators.required],
       fecha: [this.editarPagoarray?.fecha || new Date(), Validators.required]
      });
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      console.log(this.EditarVisible);
      
      this.formeditar = this.fb.group({
       id: [this.editarPagoarray?.id],
       empresa: [this.editarPagoarray?.empresa || '', Validators.required],
       rubro: [this.editarPagoarray?.rubro || '', Validators.required],
       areaOperacion: [this.editarPagoarray?.areaOperacion || '', Validators.required],
       tercero: [this.editarPagoarray?.tercero || '', Validators.required],
       valorOperacion: [this.editarPagoarray?.valorOperacion || 0, [Validators.required, Validators.min(1)]],
       estadoPago: [this.editarPagoarray?.estadoPago || null, Validators.required],
       formaPago: [this.editarPagoarray?.formaPago || null, Validators.required],
       fecha: [this.editarPagoarray?.fecha || new Date(), Validators.required]
     });
  }


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


guardar() {
  console.log(this.formeditar.value);
  
  if (this.formeditar.valid) {
    console.log("formulario enviado =>",this.formeditar.value);
    this.FormEdit.emit(this.formeditar.value);
    } else {
      this.formeditar.markAllAsTouched();
    }
  }

  

}
