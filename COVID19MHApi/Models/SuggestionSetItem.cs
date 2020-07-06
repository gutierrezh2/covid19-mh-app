using System.Collections.Generic;
public class SuggestionSetItem {
    public int Id { get; set; } // 1 = low, 2 = med, 3 = high
    public virtual List<SuggestionItem> SuggestionSet { get; set; }
}