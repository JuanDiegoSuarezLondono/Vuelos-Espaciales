import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usertype'
})
export class UsertypePipe implements PipeTransform {

  transform(value: number): string {
    return value == 1 ? "astronauta": "administrador";
  }

}
