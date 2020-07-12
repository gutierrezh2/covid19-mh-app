import { Answer } from './answer';

// PURPOSE: Contains a template for an AnswerSet object. This will keep sets of Answer objects together, as needed in the web app.

export interface AnswerSet {
    id: number; // Requires an id, unique to an object of each type
    answerSet: Answer[] // An array of Answers to keep them together
}