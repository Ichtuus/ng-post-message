import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base'
})
export class BasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
