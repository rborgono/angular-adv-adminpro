import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit() {
      this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  
  inputClass = "{'is-invalid': false}";

  get getPorcentaje() {
    return `${ this.progreso }%`;
  }

  cambiarValor(valor: number) {
    
    this.progreso += valor; 
    this.inputClass = '';
    this.valorSalida.emit(this.progreso);

    if (this.progreso > 100 && valor > 0) {
      this.progreso = 100;
      this.valorSalida.emit(100);
      this.inputClass = 'is-invalid';
      return;
    }

    if (this.progreso < 0 && valor < 0) {
      this.progreso = 0;
      this.valorSalida.emit(0);
      this.inputClass = 'is-invalid';
      return;
    }
    
  }

  onChange(nuevoValor: number) {
    if ( nuevoValor >= 100) {
      this.progreso = 100;
      this.inputClass = nuevoValor > 100 ? 'is-invalid' : '';
    } else if ( nuevoValor <= 0 ) {
      this.progreso = 0;
      this.inputClass = nuevoValor < 0 ? 'is-invalid' : '';
    } else {
      this.progreso = nuevoValor;
      this.inputClass = "";
    }
    this.valorSalida.emit(this.progreso);
  }

}
