import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Planta } from '../models/planta';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  @Output() nuevaPlanta = new EventEmitter<Planta>();

  nombre: string = '';
  tipo: 'Arbusto' | 'Árbol' = 'Arbusto';

  guardarPlanta() {
    if (this.nombre.trim()) {
      const planta: Planta = { nombre: this.nombre, tipo: this.tipo, favorito: false };
      this.nuevaPlanta.emit(planta);
      this.limpiarFormulario();
    }
  }

  limpiarFormulario() {
    this.nombre = '';
    this.tipo = 'Arbusto';
  }
}
