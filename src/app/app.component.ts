/**
 * Copyright 2021 Andrew Medworth
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  words: string[] = ['alice', 'bob', 'charlotte'];
  displayed: DisplayedWord[] = [];

  ngOnInit(): void {
    this.displayed = this.displayedWords();
  }

  displayedWords(): DisplayedWord[] {
    let letters = 0;
    const result: DisplayedWord[] = [];
    for (const word of this.words) {
      letters += word.length;
      result.push({word, lettersSoFar: letters});
    }
    return result;
  }

  dropWord(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.words, event.previousIndex, event.currentIndex);
    this.displayed = this.displayedWords();
  }
}

interface DisplayedWord {
  word: string;
  lettersSoFar: number;
}
