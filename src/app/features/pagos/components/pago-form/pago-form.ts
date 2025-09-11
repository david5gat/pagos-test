import { Component } from '@angular/core';
import { Formulario } from "../../../dialogs/formulario/formulario";

@Component({
  selector: 'app-pago-form',
  standalone:true,
  imports: [Formulario],
  templateUrl: './pago-form.html',
  styleUrl: './pago-form.css'
})
export class PagoForm {

  visible = false;
  

}
