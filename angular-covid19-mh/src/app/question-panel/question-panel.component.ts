import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';
import { AnswerSet } from '../answerSet';
import { BasePanelComponent } from '../base-panel/base-panel.component';
import { MHC19ApiService } from '../mhc19api.service'; // web api

import { QuestionsDataService } from '../questions-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


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
  //userAnswers: Map<number, Answer> = new Map();
  options: Answer[];

  qIndex = 0;
  //answerSelected = this.questions[this.qIndex].selectedAnswer.id;
  radioSelected: any;
  answerSelected: Answer;

  missedQuestions: number[] = []; // store array of Question IDs that have been missed to notify user


  constructor(private mhc19ApiService : MHC19ApiService, private qDataService : QuestionsDataService, private router : Router) { }

  ngOnInit(): void {
    this.getQuestions();
    //this.getAnswers();
    //this.radioSelected = this.questions[this.qIndex].selectedAnswer.id; // set default value, if exists
    //this.setRadioValue();
  }

  // allow this component to access the data pulled from API
  getQuestions(): void {
    this.questions = this.qDataService.questions;
    /*this.mhc19ApiService.get()
      .subscribe((data: any) => {
        this.questions = data;
        this.radioSelected = this.questions[this.qIndex].selectedAnswer.id; 
      });*/
}

  /*getAnswers(): void {
    this.userAnswers = this.qDataService.userAnswers;
  }*/

  // set default value = prev. selected answer, otherwise, no default value set
  setRadioValue(): void {
    // if answer in userAnswers map, then set radioSelected = answer (id)
    if (this.qDataService.userAnswers.has(this.questions[this.qIndex].id)) {
      this.radioSelected = this.qDataService.userAnswers.get(this.questions[this.qIndex].id).id;
    }
    // else, clear the radioSelected field
    else {
      this.radioSelected = null;
    }
  }

  prevQuestion(qIndex): void {
    //get selected option from form (in this.radioSelected) & create new answer object based on that
    this.gatherAnswer(); // set new answerSelected

    // update map of userAnswers (ie. remove prev. answer, replace with new one)
    this.updateUserAnswers();
        
    // change page by updating the index
    this.qIndex -= 1;
    //this.radioSelected = this.questions[this.qIndex].selectedAnswer.id; // set new val?

    // clear radioSelected for the next Question (the default will be set again for the next question)
    // this.radioSelected = null;
    this.setRadioValue();

  }

  nextQuestion(qIndex): void {
    //get selected option from form (in this.radioSelected) & create new answer object based on that
    this.gatherAnswer(); // set new answerSelected

    // update map of userAnswers (ie. remove prev. answer, replace with new one)
    this.updateUserAnswers();
        
    // change page by updating the index
    this.qIndex += 1;
    //this.radioSelected = this.questions[this.qIndex].selectedAnswer.id; // set new val?

    // clear radioSelected for the next Question (the default will be set again for the next question)
    // this.radioSelected = null;
    this.setRadioValue();
  }

  gatherAnswer(): void {
    this.options = this.questions[this.qIndex].options.answerSet;
  
    // search through options AnswerSet for new answer using radioSelected value
    // have method in answerSet interface?
    this.options.forEach((option) => {
      if(option.id === this.radioSelected) {
        this.answerSelected = option;
      }
    });
  }

  updateUserAnswers(): void {
    // if question id prev. in map, delete value
    if (this.qDataService.userAnswers.has(this.questions[this.qIndex].id)) {
      this.qDataService.userAnswers.delete(this.questions[this.qIndex].id);
    }

    // add new value in map if an answer was selected
    if (this.radioSelected != undefined) {
      this.qDataService.userAnswers.set(this.questions[this.qIndex].id, this.answerSelected);

      // if question prev. unanswered (in missedQuestions), remove it
      /*if (this.missedQuestions.includes(this.questions[this.qIndex].id)) {
        this.missedQuestions.splice(this.questions[this.qIndex].id, 1);
      }*/
    }
  }

  /*prevQuestion(questionId: number): void {
    questionIndex -= 1;
  }*/

  // disable finish button until check of all questions have been answered?
    // return bool - if true, go to suggestions page, if false, stay on page and tell user which ones were missed?
  finishButton(qIndex): void {
    // do work here to gather all the selected answers, pass it to whatever is doing the calculation, and pass results onto the suggestions page

    // sets radioSelected if already previously set
    this.gatherAnswer(); // set new answerSelected

    // add last answer of last question
    this.updateUserAnswers();

    // get dictionary to pull all answers - check if all questions were answered
    this.qDataService.questions.forEach((question) => {
      if (this.qDataService.userAnswers.has(question.id) === false) {
        this.missedQuestions.push(question.id);
      }
    });

    // let user know of missed questions
    if (this.missedQuestions.length != 0) {
      alert(`The following questions haven't been answered: ${this.missedQuestions}`);
    }

    // if missedQuestions array is empty, then calculate score
    if (this.missedQuestions.length === 0) {
      var score = this.calculateScore();
      this.router.navigate(["/suggestion"], { state: {userScore: score, highestScore: this.calculateHighestScore()} });
    }

    // clear out missedQuestions array
    this.missedQuestions.splice(0, this.missedQuestions.length);

  }

  // calculate score
  calculateScore(): number {
    var score = 0;

    this.qDataService.userAnswers.forEach((answer) => {
      score += answer.score;
    });
    return score;
  }

  // calculate highest score possible
  calculateHighestScore(): number {
    var highestScore = 0;

    this.qDataService.questions.forEach((questionSet) => {
      var iLastElement = questionSet.options.answerSet.length-1; 
      highestScore += questionSet.options.answerSet[iLastElement].score;
    });

    return highestScore;
  }

  
}
