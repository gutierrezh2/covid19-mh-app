import { Answer } from './answer';
import { AnswerSet } from './answerSet';

export interface Question {
    id: number;
    question: string;
    options: AnswerSet;
    selectedAnswer: Answer;
    isSelected: boolean;
}