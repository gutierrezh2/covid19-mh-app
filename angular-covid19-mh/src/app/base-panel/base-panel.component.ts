import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';
//import { QUESTIONS } from '../mock-db';

@Component({
  selector: 'app-base-panel',
  templateUrl: './base-panel.component.html',
  styleUrls: ['./base-panel.component.css']
})
export class BasePanelComponent implements OnInit {

  //questions = QUESTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
