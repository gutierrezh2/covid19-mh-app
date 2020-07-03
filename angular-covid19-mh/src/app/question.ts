import { Answer } from './answer';

export interface Question {
    id: number;
    question: string;
    //options: Answer[];
    selectedAnswer: Answer;
    isSelected: boolean;
}