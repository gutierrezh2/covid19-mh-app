import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';
import { MHC19ApiService } from '../mhc19api.service'; // web api
import { QuestionsDataService } from '../questions-data.service'; // where data is stored from pulling from web api
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-panel',
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.css'],
})

// PURPOSE: Contains the code to pull a list of Questions from the Web API. Used to manipulate the data with the HTML elements to display the data as needed.  
export class QuestionPanelComponent implements OnInit {

  // VARIABLES //
  questions: Array<Question>;
  options: Answer[];
  qIndex = 0;
  answerSelected: Answer;
  radioSelected: any;
  missedQuestions: number[] = []; // store array of Question IDs that have been missed to notify user
  isHidden = true;

  constructor(private mhc19ApiService : MHC19ApiService, private qDataService : QuestionsDataService, private router : Router) { }

  ngOnInit(): void {
    this.getQuestions(); // Grabs the questions from the Web API upon initalizaion
    this.setRadioValue(); // Sets the radio button value if there was a previously answered value
  }

  // METHODS //

  // PURPOSE: Grabs an array of Question objects from the Web API to display to the view
  getQuestions(): void {
    this.questions = this.qDataService.questions;
 }


  // PURPOSE: Sets a radio value if one was already previously selected, otherwise, clears out this.radioSelected to ensure that no value is set when loading the view
  // set default value = prev. selected answer, otherwise, no default value set
  setRadioValue(): void {
    // if answer in userAnswers map, then set radioSelected = answer (id)
    if (this.qDataService.userAnswers.has(this.questions[this.qIndex].id)) {
      this.radioSelected = this.qDataService.userAnswers.get(this.questions[this.qIndex].id).id;
    }
    // else, clear the radioSelected field
    else {
      this.radioSelected = null;
    }
  }

  // PURPOSE: Activated when pressing the "Prev" or "Next" button on the view. Used to gather the selected response for the question, if there was one, before loading the next or previous Question (indicated by what was passed in the HTML, qIndex plus or minus 1).
  switchQuestion(newIndex): void {
    //get selected option from form (in this.radioSelected) & create new answer object based on that
    this.gatherAnswer(); // set new answerSelected

    // update map of userAnswers (ie. remove prev. answer, replace with new one)
    this.updateUserAnswers();
        
    // change page by updating the index
    this.qIndex = newIndex;

    // clear radioSelected for the next Question (the default will be set again for the next question)
    this.setRadioValue();
  }


  // PURPOSE: Get the selected option from the view, which is stored in "this.radioSelected", get the corresponding Answer object from the Question object, and set the Answer to "this.answerSelected"
  gatherAnswer(): void {
    this.options = this.questions[this.qIndex].options.answerSet;
  
    // search through options AnswerSet for new answer using radioSelected value
    this.options.forEach((option) => {
      if(option.id === this.radioSelected) {
        this.answerSelected = option;
      }
    });
  }

  // PURPOSE: Update a map (userAnswers) containing all the answers selected by the user with the current selection
  updateUserAnswers(): void {
      // if question id prev. in map, delete value
      if (this.qDataService.userAnswers.has(this.questions[this.qIndex].id)) {
        this.qDataService.userAnswers.delete(this.questions[this.qIndex].id);
      }

      // add new value in map if an answer was selected
      if (this.radioSelected != undefined) {
        this.qDataService.userAnswers.set(this.questions[this.qIndex].id, this.answerSelected);
    }
  }

  // PURPOSE: Activated when pressing the "Finish" button on the view. Used to gather the selected response for the question, if there was one, and checks to see if all questions have been answered. (If not, then the user will recieve an error telling them which questions need to be finished)
  // disable finish button until check of all questions have been answered?
  finishButton(qIndex): void {
    // do work here to gather all the selected answers, pass it to whatever is doing the calculation, and pass results onto the suggestions page

    // sets radioSelected if already previously set
    this.gatherAnswer(); // set new answerSelected

    // add last answer of last question
    this.updateUserAnswers();

    // determine which questions weren't answered and store in an array to reference in an error message
    this.findMissedQuestions();

    // if missedQuestions array is empty, then calculate score
    if (this.missedQuestions.length === 0) {
      this.router.navigate(["/suggestion"]);
    }

    // clear out missedQuestions array
    this.missedQuestions.splice(0, this.missedQuestions.length);

  }

  // PURPOSE: Determine which numbers weren't answered
  findMissedQuestions(): void {
    // get dictionary to pull all answers - check if all questions were answered
    this.qDataService.questions.forEach((question) => {
      if (this.qDataService.userAnswers.has(question.id) === false) {
        this.missedQuestions.push(question.id);
      }
    });

    // let user know of missed questions
    if (this.missedQuestions.length != 0) {

      // Adds the text in the HTML telling the user which questions weren't answered
      var errorMsgDiv = document.createElement("p");
      var element = document.getElementsByClassName("error-msg")[0];
      if (element.childNodes.length != 0) {
        element.removeChild(element.childNodes[0]);
      }
      element.insertAdjacentHTML("afterbegin", `<p>The following questions have not been answered: ${this.missedQuestions}.<br>Please go back and answer these questions to retrieve your results.</p>`);

      this.setErrorMsg(false); 
    } else {
      this.setErrorMsg(true);
    }
  }

  // PURPOSE: Used to hide or display the error message
  // default = hidden = true; otherwise, not hidden = false
  setErrorMsg(isErrors): void {
    this.isHidden = isErrors; // if isErrors set to true, hide them
  }
}
