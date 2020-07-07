// PURPOSE: Contains a template for a Suggestion object.

export interface Suggestion {
    id: number; // Requires an id, unique to an object of each type
    suggestion: string; // The actual suggestion string
    scoring: string; // Shows whether suggestion belongs in the low/medium/high scoring
}