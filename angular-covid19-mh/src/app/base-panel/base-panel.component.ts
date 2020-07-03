import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-panel',
  templateUrl: './base-panel.component.html',
  styleUrls: ['./base-panel.component.css']
})
export class BasePanelComponent implements OnInit {

  questionIdCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
