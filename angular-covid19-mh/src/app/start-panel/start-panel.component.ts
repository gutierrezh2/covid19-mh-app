import { Component, OnInit } from '@angular/core';

import { MHC19ApiService } from '../mhc19api.service'; // web api
import { Question } from '../question';

@Component({
  selector: 'app-start-panel',
  templateUrl: './start-panel.component.html',
  styleUrls: ['./start-panel.component.css']
})
export class StartPanelComponent implements OnInit {

  questionIdCount = 1;

  //constructor() { }
  public questions: Array<Question>;

  constructor(private mhc19ApiService : MHC19ApiService) {
  }

  ngOnInit(): void {
    this.mhc19ApiService.get().subscribe((data: any) => this.questions = data);
  }

}

/*
@Component({
  selector: 'app-start-panel',
  templateUrl: './start-panel.component.html',
  styleUrls: ['./start-panel.component.css']
})
export class StartPanelComponent extends BasePanelComponent {

  ngOnInit(): void {
  }
}*/
