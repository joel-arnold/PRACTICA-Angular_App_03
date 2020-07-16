import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(nombre: string, todas: boolean = true): string {
    let nombres = nombre.split(' ');
    nombres = nombres.map((nombrecito) => nombrecito.toLowerCase());
    if (todas) {
      nombres = nombres.map((nombre) => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      });
      console.log(nombres);
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(' ');
  }
}
