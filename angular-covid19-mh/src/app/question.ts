import { Answer } from './answer';

export interface Question {
    id: number;
    question: string;
    options: Answer[];
    //answer: Answer;
    //isSelected: boolean;
}