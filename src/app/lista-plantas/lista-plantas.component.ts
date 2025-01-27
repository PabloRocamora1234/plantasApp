import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { Planta } from '../models/planta';

@Component({
  selector: 'app-lista-plantas',
  standalone: true,  // Marca el componente como independiente
  imports: [CommonModule],  // Importa CommonModule para habilitar *ngFor y ngClass
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.scss'],
})
export class ListaPlantasComponent implements OnInit {
  // Recibimos el array de plantas como input
  @Input() plantas: Planta[] = [];

  // Se llama cuando el componente se inicializa
  ngOnInit(): void {
    this.ordenarPlantas();  // Ordenamos las plantas al inicializar
  }

  // Método para ordenar las plantas alfabéticamente por nombre
  ordenarPlantas(): void {
    this.plantas.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1;
      } else if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    });
  }

  // Métodos para eliminar y marcar como favorito
  eliminarPlanta(index: number): void {
    this.plantas.splice(index, 1);
  }

  marcarFavorito(index: number): void {
    this.plantas[index].favorito = !this.plantas[index].favorito;
  }
}