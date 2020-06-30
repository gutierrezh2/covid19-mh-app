import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';
import { QUESTIONS } from '../mock-db';
import { BasePanelComponent } from '../base-panel/base-panel.component';

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

  questions = QUESTIONS;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
