import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  heroe: string = 'Sambá Argentíno';
  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.55;
  fecha: Date = new Date();
  idiomaActual: string = 'es';
  nombrePropio: string = 'jOeL arnOld schijVarGeR';
  videoURL: string = 'https://www.youtube.com/embed/P0cdTxZhVgE';
  ocultarContra: boolean = false;
  contrasena: string = 'contra123';

  persona = {
    nombre: 'nombrecito',
    edad: 32,
    direccion: {
      calle: 'Callecita',
      altura: 159,
      piso: 3,
    },
    colorFavorito: 'azul',
  };

  promesita = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(
        'Aquí llegó Bala, Bala. El show va a comenzar... Ya llegó! Ya llegó!'
      );
    }, 4500);
  });
}
