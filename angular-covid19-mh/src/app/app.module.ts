import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports for Components
import { AppComponent } from './app.component';
import { BasePanelComponent } from './base-panel/base-panel.component';
import { StartPanelComponent } from './start-panel/start-panel.component';
import { QuestionPanelComponent } from './question-panel/question-panel.component';
import { SuggestionPanelComponent } from './suggestion-panel/suggestion-panel.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // NgModel lives here

import { MHC19ApiService } from './mhc19api.service'; //*
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PURPOSE: Contains imported Modules for use within the web app's view.

@NgModule({
  declarations: [
    AppComponent,
    BasePanelComponent,
    StartPanelComponent,
    QuestionPanelComponent,
    SuggestionPanelComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    MHC19ApiService // Web API
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
