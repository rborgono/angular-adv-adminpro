import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels1: string[] = ['Bebidas', 'Frutas', 'Abarrotes'];
  public data1: number[] = [100, 350, 280];
  public labels2: string[] = ['Pan', 'Queso', 'Verduras'];
  public data2: number[] = [200, 150, 300];
  public labels3: string[] = ['Jugos', 'Confites', 'Helados'];
  public data3: number[] = [220, 360, 510];
  public labels4: string[] = ['Harina', 'Azúcar', 'Aceite'];
  public data4: number[] = [350, 450, 100];
}
