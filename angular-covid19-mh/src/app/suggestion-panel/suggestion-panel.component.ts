import { Component, OnInit } from '@angular/core';
import { MHC19ApiService } from '../mhc19api.service'; // web api
import { QuestionsDataService } from '../questions-data.service';
import { SuggestionSet } from '../suggestionSet';
import { Suggestion } from '../suggestion';

@Component({
  selector: 'app-suggestion-panel',
  templateUrl: './suggestion-panel.component.html',
  styleUrls: ['./suggestion-panel.component.css']
})
export class SuggestionPanelComponent implements OnInit {

  score: number;
  highestScore: number;
  suggestions: SuggestionSet;
  suggestion: Suggestion; // actual suggestion given based on 

  constructor(private mhc19ApiService : MHC19ApiService, private qDataService : QuestionsDataService) { }

  ngOnInit(): void {
    this.score = history.state.userScore; // pull calculated score from previous page
    this.highestScore = history.state.highestScore; // pull number of questions from previous page
    this.getSuggestionSet(); // get list of suggestions from API
    this.makeASuggestion(); // calculate a suggestion based on the score
  }

  getSuggestionSet(): void {
    this.suggestions = this.qDataService.suggestionSet;
  }

  makeASuggestion(): void {
    // determine range: calculation = truncate((highest score)/3)
    var range = Math.trunc(this.highestScore/3); //<-- remove 3, replace w/ len

    // scoring: 0-range="low", (range+1)-(range*2)="medium", [(range*2)+1]-highest score="high"
    // random: var item = items[Math.floor(Math.random() * items.length)];
    // set suggestion based on score
    if (this.score < range) {
      // access suggestions[0], id=1
      this.suggestion = this.suggestions[0].suggestionSet[Math.floor(Math.random() * this.suggestions[0].suggestionSet.length)];

    } else if (this.score < (range*2)) {
      // access suggestions[1], id=2
      this.suggestion = this.suggestions[1].suggestionSet[Math.floor(Math.random() * this.suggestions[1].suggestionSet.length)];
    } else {
      // access suggestions[2], id=3
      this.suggestion = this.suggestions[2].suggestionSet[Math.floor(Math.random() * this.suggestions[2].suggestionSet.length)];
    }
  }

  retakeButton(): void {
    this.qDataService.userAnswers.clear(); // clear out all answers when restarting
  }

}
