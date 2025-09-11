import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';


interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}

@Component({
  selector: 'app-pagos-list',
  imports: [TableModule],
  standalone: true,
  templateUrl: './pagos-list.html',
  styleUrl: './pagos-list.css'
})

export class PagosList {

  products: Product[] = [
    { code: 'P1001', name: 'Laptop', category: 'Electronics', quantity: 15 },
    { code: 'P1002', name: 'Smartphone', category: 'Electronics', quantity: 30 },
    { code: 'P1003', name: 'Keyboard', category: 'Accessories', quantity: 45 },
    { code: 'P1004', name: 'Chair', category: 'Furniture', quantity: 12 },
    { code: 'P1005', name: 'Notebook', category: 'Stationery', quantity: 100 }
  ];

}
