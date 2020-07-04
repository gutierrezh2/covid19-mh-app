import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';
import { BasePanelComponent } from '../base-panel/base-panel.component';
import { MHC19ApiService } from '../mhc19api.service'; // web api

@Component({
  selector: 'app-question-panel',
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.css']
})
/*
export class QuestionPanelComponent extends BasePanelComponent implements OnInit {

  questions = QUESTIONS;

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}*/
export class QuestionPanelComponent implements OnInit {
  
  questions: Array<Question>;
  questionIndex = 0;
  answerSelected: Answer;
  radioSelected: any;

  constructor(private mhc19ApiService : MHC19ApiService) {
  }

  ngOnInit(): void {
    //this.mhc19ApiService.get().subscribe((data: any) => this.questions = data);
    this.getQuestions();
  }

  getQuestions(): void {
    this.mhc19ApiService.get()
      .subscribe((data: any) => this.questions = data);
  }

  nextQuestion(questionIndex): void {
    //get selected option from form
    console.log(this.radioSelected);

    // use update method
    this.mhc19ApiService.update(this.questions[questionIndex].selectedAnswer);
    
    // change page by updating the index
    this.questionIndex += 1;
  }

  /*prevQuestion(questionId: number): void {
    questionIndex -= 1;
  }*/

}
