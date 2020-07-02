using System.Collections.Generic;

public class QuestionItem {
    public int Id { get; set; }
    public string Question { get; set; }
    //public AnswerSetItem Options { get; set; }
    //public AnswerItem SelectedAnswer { get; set; }
    public bool IsSelected { get; set; }

    /*public QuestionItem(int id, string question, AnswerSetItem options, AnswerItem selectedAnswer, bool isSelected) {
        Id = id;
        Question = question;
        Options = options;
        SelectedAnswer = selectedAnswer;
        IsSelected = isSelected;
    }*/
}