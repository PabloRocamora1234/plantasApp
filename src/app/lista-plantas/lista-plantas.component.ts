import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Planta } from '../models/planta';

@Component({
  selector: 'app-lista-plantas',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.scss'],
})
export class ListaPlantasComponent implements OnInit {
  @Input() plantas: Planta[] = [];

  
  ngOnInit(): void {
    this.ordenarPlantas();  
  }

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

  eliminarPlanta(index: number): void {
    this.plantas.splice(index, 1);
  }

  marcarFavorito(index: number): void {
    this.plantas[index].favorito = !this.plantas[index].favorito;
  }
}