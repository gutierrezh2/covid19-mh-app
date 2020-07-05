import { Component, OnInit, Input } from '@angular/core';

import { MHC19ApiService } from '../mhc19api.service'; // web api
import { QuestionsDataService } from '../questions-data.service';
import { Question } from '../question';


@Component({
  selector: 'app-start-panel',
  templateUrl: './start-panel.component.html',
  styleUrls: ['./start-panel.component.css'],
})
export class StartPanelComponent implements OnInit {

  questions: Array<Question>;

  constructor(private mhc19ApiService : MHC19ApiService, private qDataService : QuestionsDataService) {
  }

  ngOnInit(): void {
    //this.mhc19ApiService.get().subscribe((data: any) => this.questions = data);
    //this.qDataService.getMessage().subscribe(questions => this.questions = questions);
    //this.qDataService.currentMessage.subscribe(message => this.message = message)
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
