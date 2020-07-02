using System.Collections.Generic;
public class AnswerSetItem {
    public int Id { get; set; }
    public virtual List<AnswerItem> AnswerSet { get; set; }

    /*public AnswerSetItem(int id, List<AnswerItem> answerSet) {
        Id = id;
        AnswerSet = answerSet;
    }*/
}