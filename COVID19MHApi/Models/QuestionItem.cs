// PURPOSE: Contains a template for an Question entity.

public class QuestionItem {
    public long Id { get; set; } // Id: A unique identifier for each Question
    public string Question { get; set; } // Question: Contains a string for the actual question
    public AnswerSetItem Options { get; set; } // Options: Contains an AnswerSet entity
}