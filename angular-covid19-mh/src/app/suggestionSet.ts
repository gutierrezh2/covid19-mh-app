import { Suggestion } from './suggestion';

// PURPOSE: Contains a template for a SuggestionSet object.

export interface SuggestionSet {
    id: number; // Requires an id, unique to an object of each type
    suggestionSet: Suggestion[] // A list of Suggestion objects, all containing Suggestions that belong in the same scoring (low/medium/high)
}