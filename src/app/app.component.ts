import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagosList } from "./features/pagos/pages/pagos-list/pagos-list";
import { PagoForm } from "./features/pagos/components/pago-form/pago-form";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagosList, PagoForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagos-test';
}
