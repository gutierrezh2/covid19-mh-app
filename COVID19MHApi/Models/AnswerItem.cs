// PURPOSE: Contains a template for an Answer entity.
public class AnswerItem {

    public long Id { get; set; } // Id: A unique identifier for each Answer
    public string Answer { get; set; } // Answer: Contains a string for the actual answer
    public int Score { get; set; } // Score: Contains a numerical score associated with the answer

    /*public AnswerItem(int id, string answer, int score) {
        Id = id;
        Answer = answer;
        Score = score;
    }*/
}