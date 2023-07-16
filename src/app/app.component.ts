import { Component } from '@angular/core';

interface Item {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RonyAngular';

  items: Item[] = [
    { nombre: 'Alfajor Tatin', costo: '$100' },
    { nombre: 'Arroz Gallo', costo: '$260' },
    { nombre: 'Queso crema', costo: '$1500' },
    // Agrega más elementos si lo deseas
  ];

  showList: boolean = false;
  buttonText: string = 'Mostrar Lista';

  toggleList() {
    this.showList = !this.showList;
    this.buttonText = this.showList ? 'Ocultar lista' : 'Mostrar lista';
  }
}
