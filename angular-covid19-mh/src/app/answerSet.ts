import { Answer } from './answer';

// PURPOSE: Contains a template for an AnswerSet object. This will keep sets of Answer objects together, as needed in the web app.

export interface AnswerSet {
    id: number; // Requires an id, unique to an object of each type
    answerSet: Answer[] // An array of Answers to keep them together
}

/*export const ANSWERS_SET1: Answer[] = [
    { id: 1, answer: "Really Great", score: 0 },
    { id: 2, answer: "Good", score: 1 },
    { id: 3, answer: "Okay", score: 2 },
    { id: 4, answer: "Bad", score: 3 },
    { id: 5, answer: "Really Terrible", score: 4 }
];

export const ANSWERS_SET2: Answer[] = [
    { id: 6, answer: "Not at all", score: 0 },
    { id: 7, answer: "A little", score: 1 },
    { id: 8, answer: "Somewhat", score: 2 },
    { id: 9, answer: "A lot", score: 3 }
];

export const ANSWERS_SET3: Answer[] = [
    { id: 10, answer: "Very well", score: 0 },
    { id: 11, answer: "Somewhat well", score: 1 },
    { id: 12, answer: "Not very well", score: 2 },
    { id: 13, answer: "Not at all", score: 3 }
];

export const ANSWERS_SET4: Answer[] = [
    { id: 14, answer: "No", score: 0 },
    { id: 15, answer: "Yes", score: 1 },
];
*/