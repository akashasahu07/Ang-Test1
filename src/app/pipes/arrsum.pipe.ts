import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrsum'
})
export class ArrsumPipe implements PipeTransform {

  transform(value: any[]): number {
    if (!Array.isArray(value)) return 0;

    return value.reduce((sum, item) => sum + (typeof item === 'number' ? item : 0), 0);
  }

}
