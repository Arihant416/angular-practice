import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter',
  standalone: true
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: Array<number>, ...args: unknown[]): unknown {
    return value.filter((item)=>item%2 == 0)
  }

}
