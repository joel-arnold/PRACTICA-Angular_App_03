import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  
  constructor(private sanadorDeDoms: DomSanitizer){}

  transform(value: string): SafeResourceUrl {
    return this.sanadorDeDoms.bypassSecurityTrustResourceUrl(value)
  }

}
