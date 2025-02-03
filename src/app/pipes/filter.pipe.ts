import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[]): number[] {
    if (!Array.isArray(value)) return [];

    return value.filter(item => typeof item === 'number');
  }

}
