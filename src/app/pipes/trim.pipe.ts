import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, start: number = 0, end?: number): string {
    if (typeof value !== 'string') return '';

    return value.substring(start, end); // Extracts the portion of text
  }

}
