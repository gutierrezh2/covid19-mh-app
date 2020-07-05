import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-panel',
  templateUrl: './suggestion-panel.component.html',
  styleUrls: ['./suggestion-panel.component.css']
})
export class SuggestionPanelComponent implements OnInit {

  score: number;

  constructor() { }

  ngOnInit(): void {
    this.score = history.state.data;
     // pull calculated score from previous page
  }

}
