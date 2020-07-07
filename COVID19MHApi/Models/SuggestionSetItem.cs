using System.Collections.Generic;

// PURPOSE: Contains a template for an SuggestionSet entity. (Each SuggestionSet contains a list of Suggestions, all classified within the same scoring (low, medium, high)).
public class SuggestionSetItem {
    public int Id { get; set; } // Id: A unique identifier for each SuggestionSet - 1 = low, 2 = med, 3 = high
    public virtual List<SuggestionItem> SuggestionSet { get; set; } // SuggestionSet: Contains a list of Suggestions, which differ depending on what scoring classification they have: low, medium, or high
}