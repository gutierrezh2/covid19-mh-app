using System.Collections.Generic;

// PURPOSE: Contains a template for an AnswerSet entity.
public class AnswerSetItem {
    public int Id { get; set; } // Id: A unique identifier for each AnswerSet
    public virtual List<AnswerItem> AnswerSet { get; set; } // AnswerSet: Defines a list of AnswerItem entities
}