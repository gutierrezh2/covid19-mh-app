using System.Collections.Generic;

// PURPOSE: Contains the AnswerSetItems, which have a list of grouped AnswerItems used to assign the Options field in the QuestionItem entity. (This is so that we don't have repeat code for the AnswerSetItems.)

public static class AnswerSetDatabase {
    public static AnswerSetItem AnswerSet1 = new AnswerSetItem() {
        Id = 1,
        AnswerSet = new List<AnswerItem> {
            new AnswerItem() { Id = 1, Answer = "Really great", Score = 0 },
            new AnswerItem() { Id = 2, Answer = "Good", Score = 1 },
            new AnswerItem() { Id = 3, Answer = "Okay", Score = 2 },
            new AnswerItem() { Id = 4, Answer = "Bad", Score = 3 },
            new AnswerItem() { Id = 5, Answer = "Really terrible", Score = 4 }
        }
    };

    public static AnswerSetItem AnswerSet2 = new AnswerSetItem() {
        Id = 2,
        AnswerSet = new List<AnswerItem> {
            new AnswerItem() { Id = 6, Answer = "Not at all", Score = 0 },
            new AnswerItem() { Id = 7, Answer = "A little", Score = 1 },
            new AnswerItem() { Id = 8, Answer = "Somewhat", Score = 2 },
            new AnswerItem() { Id = 9, Answer = "A lot", Score = 3 },
        }
    };

    public static AnswerSetItem AnswerSet3 = new AnswerSetItem() {
        Id = 3,
        AnswerSet = new List<AnswerItem> {
            new AnswerItem() { Id = 10, Answer = "Very well", Score = 0 },
            new AnswerItem() { Id = 11, Answer = "Somewhat well", Score = 1 },
            new AnswerItem() { Id = 12, Answer = "Not very well", Score = 2 },
            new AnswerItem() { Id = 13, Answer = "Not at all", Score = 3 }
        }
    };

    public static AnswerSetItem AnswerSet4 = new AnswerSetItem() {
        Id = 4,
        AnswerSet = new List<AnswerItem> {
            new AnswerItem() { Id = 14, Answer = "No", Score = 0 },
            new AnswerItem() { Id = 15, Answer = "Yes", Score = 1 }            
        }
    };
}