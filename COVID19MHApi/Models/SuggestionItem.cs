// PURPOSE: Contains a template for an Suggestion entity.
public class SuggestionItem {
    public long Id { get; set; } // Id: A unique identifier for each Suggestion
    public string Suggestion { get; set; } // Question: Contains a string for the actual suggestion
    public string Scoring { get; set; } // Scoring: Defined by low, medium, or high; for classifying the suggestion type

    /*public QuestionItem(int id, string question, AnswerSetItem options, AnswerItem selectedAnswer, bool isSelected) {
        Id = id;
        Question = question;
        Options = options;
        SelectedAnswer = selectedAnswer;
        IsSelected = isSelected;
    }*/
}