import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaPlantasComponent } from './lista-plantas/lista-plantas.component';
import { Planta } from './models/planta';

@Component({
  selector: 'app-root',
  standalone: true, // Marca el componente como independiente
  imports: [CommonModule, FormularioComponent, ListaPlantasComponent], // Importa los otros componentes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  plantas: Planta[] = [];

  agregarPlanta(planta: Planta) {
    this.plantas.push(planta);
    this.plantas.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
}