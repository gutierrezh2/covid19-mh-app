// PURPOSE: Contains a template for an Answer object.

export interface Answer {
    id: number; // Requires an id, unique to an object of each type
    answer: string; // The actual answer string
    score: number; // Associated score with the answer
}