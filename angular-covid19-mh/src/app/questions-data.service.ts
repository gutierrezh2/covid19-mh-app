import { Injectable } from '@angular/core';
import { Question } from './question';
import { Answer } from './answer';
import { SuggestionSet } from './suggestionSet';
import { MHC19ApiService } from './mhc19api.service'; // web api
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// PURPOSE: An injectable service so that every panel can access the Questions and SuggestionSets pulled from the web API
// Can be refactored so that this isn't needed

export class QuestionsDataService {

  // VARIABLES //
  questions: Array<Question>; // Where list of Questions from web API is stored
  suggestionSet: SuggestionSet; // Where list of SuggestionSets from web API is stored
  userAnswers: Map<number, Answer> = new Map(); // Stores the user's selected Answer values for each question id = key

  constructor(private mhc19ApiService : MHC19ApiService) { 
    // Pull from QuestionItems in web API
    this.mhc19ApiService.get().subscribe((data: any) => this.questions = data);
    
    // Pull from SuggestionSetItems in web API
    this.mhc19ApiService.getSuggestionSet().subscribe((data: any) => this.suggestionSet = data);
  }
}
