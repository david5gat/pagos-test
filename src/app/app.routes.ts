import { Routes } from '@angular/router';
import { PagosList } from './features/pagos/pages/pagos-list/pagos-list';
import { PagoForm } from './features/pagos/components/pago-form/pago-form';

export const routes: Routes = [
    {path:'pagolist', title:'pagolist' ,component: PagosList},
    {path:'pagoform', title:'pagoForm' ,component: PagoForm}
];
