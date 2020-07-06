import { Injectable } from '@angular/core';
import { Question } from './question';
import { Answer } from './answer';
import { SuggestionSet } from './suggestionSet';
import { MHC19ApiService } from './mhc19api.service'; // web api
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsDataService {

  questions: Array<Question>;
  suggestionSet: SuggestionSet;
  userAnswers: Map<number, Answer> = new Map(); // store Answer values for each question id = key

  constructor(private mhc19ApiService : MHC19ApiService) { 
    this.mhc19ApiService.get().subscribe((data: any) => this.questions = data);
    // pull from suggestions in web api
    this.mhc19ApiService.getSuggestionSet().subscribe((data: any) => this.suggestionSet = data);
  }
}
