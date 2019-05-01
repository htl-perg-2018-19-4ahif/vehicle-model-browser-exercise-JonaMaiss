import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 5
  },
  wordsPerSentence: {
    max: 16,
    min: 6
  }
});

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public text: string = '';

  constructor() { }

  ngOnInit() {
    this.text = lorem.generateParagraphs(5);
  }

}
