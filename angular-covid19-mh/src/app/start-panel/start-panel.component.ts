import { Component, OnInit, Input } from '@angular/core';
import { MHC19ApiService } from '../mhc19api.service'; // web api
import { QuestionsDataService } from '../questions-data.service'; // where data is stored from pulling from web api
import { Question } from '../question'; // Question object


@Component({
  selector: 'app-start-panel',
  templateUrl: './start-panel.component.html',
  styleUrls: ['./start-panel.component.css'],
})

// PURPOSE: Contains the code to help display any elements for the starting panel for this web app. (Mostly template code, as no additional code was needed for this page.)
export class StartPanelComponent implements OnInit {

  // Do I need this?
  questions: Array<Question>;

  // Do I need to initialize constructor here with the services?
  constructor(private mhc19ApiService : MHC19ApiService, private qDataService : QuestionsDataService) {
  }

  ngOnInit(): void {
    //this.mhc19ApiService.get().subscribe((data: any) => this.questions = data);
    //this.qDataService.getMessage().subscribe(questions => this.questions = questions);
    //this.qDataService.currentMessage.subscribe(message => this.message = message)
    //this.questions = this.qDataService.questions;
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
