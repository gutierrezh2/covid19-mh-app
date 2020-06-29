import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasePanelComponent } from './base-panel/base-panel.component';
import { StartPanelComponent } from './start-panel/start-panel.component';
import { QuestionPanelComponent } from './question-panel/question-panel.component';
import { SuggestionPanelComponent } from './suggestion-panel/suggestion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BasePanelComponent,
    StartPanelComponent,
    QuestionPanelComponent,
    SuggestionPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
