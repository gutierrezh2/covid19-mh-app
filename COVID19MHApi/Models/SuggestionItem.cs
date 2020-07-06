public class SuggestionItem {
    public long Id { get; set; }
    public string Suggestion { get; set; }
    public string Scoring { get; set; } // low, medium, high

    /*public QuestionItem(int id, string question, AnswerSetItem options, AnswerItem selectedAnswer, bool isSelected) {
        Id = id;
        Question = question;
        Options = options;
        SelectedAnswer = selectedAnswer;
        IsSelected = isSelected;
    }*/
}