import { Pipe, PipeTransform } from '@angular/core';
import { DisplayedWord } from './app.component';

@Pipe({
  name: 'displayWords'
})
export class DisplayWordsPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): DisplayedWord[] {
    let letters = 0;
    const result: DisplayedWord[] = [];
    for (const word of value) {
      letters += word.length;
      result.push({word, lettersSoFar: letters});
    }
    return result;
  }
}
