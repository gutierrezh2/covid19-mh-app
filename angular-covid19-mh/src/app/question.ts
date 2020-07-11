import { Answer } from './answer';
import { AnswerSet } from './answerSet';

// PURPOSE: Contains a template for a Question object.

export interface Question {
    id: number; // Requires an id, unique to an object of each type
    question: string; // The actual question string
    options: AnswerSet; // An AnswerSet object that contains the list of Answer objects of the Answers available for a given Question
    /*selectedAnswer: Answer; // Is needed? No longer being used
    isSelected: boolean; // Is needed? No longer being used*/
}