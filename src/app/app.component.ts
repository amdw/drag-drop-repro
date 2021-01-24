import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  words: string[] = ['alice', 'bob', 'charlotte'];

  displayedWords(): DisplayedWord[] {
    let letters = 0;
    let result: DisplayedWord[] = [];
    for (let word of this.words) {
      letters += word.length;
      result.push({word: word, lettersSoFar: letters});
    }
    return result;
  }

  dropWord(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.words, event.previousIndex, event.currentIndex);
  }
}

interface DisplayedWord {
  word: string;
  lettersSoFar: number;
}
