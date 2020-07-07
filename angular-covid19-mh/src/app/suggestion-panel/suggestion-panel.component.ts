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

// PURPOSE: Contains the code to add up a score, based on the answers selected by the user, calculates a suggestion based on that score, and displays it to the user.
export class SuggestionPanelComponent implements OnInit {

  // VARIABLES //
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

  // METHODS //

  // PURPOSE: Grabs an array of SuggestionSet items, each of which contains a list of suggestions, based on the user's scoring (low/medium/high)
  getSuggestionSet(): void {
    this.suggestions = this.qDataService.suggestionSet;
  }

  // PURPOSE: Calculates a suggestion, based on the user's score
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

  // PURPOSE: Clears out the map that contains a user's answers, so that the user starts out fresh when re-doing the mental health assessment
  retakeButton(): void {
    this.qDataService.userAnswers.clear(); // clear out all answers when restarting
  }

}
