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
  
  public questions: Array<Question>;
  //public questionId = this.questions[0].id;

  constructor(private mhc19ApiService : MHC19ApiService) {
  }

  ngOnInit(): void {
    this.mhc19ApiService.get().subscribe((data: any) => this.questions = data);
  }

  /*calcPageNum(questionId) {
    if questionId == 0 {

    }
  }*/

}
