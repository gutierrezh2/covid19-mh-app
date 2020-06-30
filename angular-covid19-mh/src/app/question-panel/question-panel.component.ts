import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';
import { QUESTIONS } from '../mock-db';

@Component({
  selector: 'app-question-panel',
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.css']
})
export class QuestionPanelComponent implements OnInit {

  questions = QUESTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
