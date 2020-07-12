import { Component, OnInit } from '@angular/core';
import { MHC19ApiService } from '../mhc19api.service'; // web api
import { QuestionsDataService } from '../questions-data.service'; // where data is stored from pulling from web api

@Component({
  selector: 'app-start-panel',
  templateUrl: './start-panel.component.html',
  styleUrls: ['./start-panel.component.css'],
})

// PURPOSE: Contains the code to help display any elements for the starting panel for this web app. 
export class StartPanelComponent implements OnInit {

  // Allows the questions to show up on the next panel (Questions Panel)
  constructor(private mhc19ApiService : MHC19ApiService, private qDataService : QuestionsDataService) {
  }

  ngOnInit(): void {
  }

}
