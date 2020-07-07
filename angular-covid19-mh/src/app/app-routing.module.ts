import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';
import { StartPanelComponent } from './start-panel/start-panel.component';
import { QuestionPanelComponent } from './question-panel/question-panel.component';
import { SuggestionPanelComponent } from './suggestion-panel/suggestion-panel.component';

// PURPOSE: Lists paths for each screen (start, question, suggestion)
const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  {path: 'start', component: StartPanelComponent },
  {path: 'question/:id', component: QuestionPanelComponent },
  {path: 'suggestion', component: SuggestionPanelComponent }
]

// Initializes router, starts listening for browser location changes
@NgModule({
  declarations: [],
  /*imports: [
    CommonModule
  ]*/
  imports: [RouterModule.forRoot(routes)], // configures AppRoutingModule array with routes
  exports: [RouterModule] // to make it available through app
})

export class AppRoutingModule { }
