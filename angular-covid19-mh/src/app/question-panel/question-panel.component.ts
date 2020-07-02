import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';
import { QUESTIONS } from '../mock-db';
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

  //questions = QUESTIONS;
  public questions: Array<Question>;

  constructor(private mhc19ApiService : MHC19ApiService) {
    mhc19ApiService.get().subscribe((data: any) => this.questions = data);
  }

  ngOnInit(): void {
    /*this.getHeroes();*/
  }

  // Add method to getQuestion
  /*getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/
}
