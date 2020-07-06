using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using COVID19MHApi.Models;
using System;
using System.Linq;

using System.Text.Json;
using System.Text.Json.Serialization;

// References: https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/working-with-sql?view=aspnetcore-3.0&tabs=visual-studio, https://exceptionnotfound.net/ef-core-inmemory-asp-net-core-store-database/

public class C19MHDatabase {
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new QuestionContext(
            serviceProvider.GetRequiredService<DbContextOptions<QuestionContext>>()))
        {
            if (context.QuestionItems.Any())
            {
                return;   // Data was already seeded
            }

            context.QuestionItems.AddRange(
                new QuestionItem() {
                    Id = 1,
                    Question = "How are you right now?",
                    Options = new AnswerSetItem() {
                        Id = 1,
                        AnswerSet = new List<AnswerItem>() {
                        new AnswerItem() { Id = 1, Answer = "Really great", Score = 0 },
                        new AnswerItem() { Id = 2, Answer = "Good", Score = 1 },
                        new AnswerItem() { Id = 3, Answer = "Okay", Score = 2 },
                        new AnswerItem() { Id = 4, Answer = "Bad", Score = 3 },
                        new AnswerItem() { Id = 5, Answer = "Really terrible", Score = 4 }
                        }
                    },
                    SelectedAnswer = new AnswerItem() {
                        Id = 1,
                        Answer = "Really great",
                        Score = 0 },
                    IsSelected = false
                },

                new QuestionItem() {
                    Id = 2,
                    Question = "How much has your mood dropped or negatively changed (ex. more stressed) since COVID-19 started?",
                    Options = new AnswerSetItem() {
                        Id = 2,
                        AnswerSet = new List<AnswerItem>() {
                        new AnswerItem() { Id = 6, Answer = "Not at all", Score = 0 },
                        new AnswerItem() { Id = 7, Answer = "A little", Score = 1 },
                        new AnswerItem() { Id = 8, Answer = "Somewhat", Score = 2 },
                        new AnswerItem() { Id = 9, Answer = "A lot", Score = 3 },
                        }
                    },
                    SelectedAnswer = new AnswerItem() {
                        Id = 6,
                        Answer = "Not at all",
                        Score = 0 },
                    IsSelected = false
                },

                new QuestionItem() {
                    Id = 3,
                    Question = "How well have you been able to maintain your daily routine/life since COVID-19 started?",
                    Options = new AnswerSetItem() {
                        Id = 3,
                        AnswerSet = new List<AnswerItem>() {
                        new AnswerItem() { Id = 10, Answer = "Very well", Score = 0 },
                        new AnswerItem() { Id = 11, Answer = "Somewhat well", Score = 1 },
                        new AnswerItem() { Id = 12, Answer = "Not very well", Score = 2 },
                        new AnswerItem() { Id = 13, Answer = "Not at all", Score = 3 },
                        }
                    },
                    SelectedAnswer = new AnswerItem() {
                        Id = 12,
                        Answer = "Somewhat",
                        Score = 2 },
                    IsSelected = true
                },

                new QuestionItem() {
                    Id = 4,
                    Question = "Has there been a negative change in your sleeping habits? (ex. too much or too little sleep)",
                    Options =  new AnswerSetItem() {
                        Id = 4,
                        AnswerSet = new List<AnswerItem>() {
                        new AnswerItem() { Id = 14, Answer = "Not at all", Score = 0 },
                        new AnswerItem() { Id = 15, Answer = "A little", Score = 1 },
                        new AnswerItem() { Id = 16, Answer = "Somewhat", Score = 2 },
                        new AnswerItem() { Id = 17, Answer = "A lot", Score = 3 },
                        }
                    },
                    SelectedAnswer = new AnswerItem() {
                        Id = 14,
                        Answer = "Not at all",
                        Score = 0 },
                    IsSelected = true
                },

                new QuestionItem() {
                    Id = 5,
                    Question = "Has there been a negative change in your eating habits? (ex. increased or decreased eating)",
                    Options =  new AnswerSetItem() {
                        Id = 5,
                        AnswerSet = new List<AnswerItem>() {
                        new AnswerItem() { Id = 18, Answer = "Not at all", Score = 0 },
                        new AnswerItem() { Id = 19, Answer = "A little", Score = 1 },
                        new AnswerItem() { Id = 20, Answer = "Somewhat", Score = 2 },
                        new AnswerItem() { Id = 21, Answer = "A lot", Score = 3 },
                        }
                    },
                    SelectedAnswer = new AnswerItem() {
                        Id = 18,
                        Answer = "Not at all",
                        Score = 0 },
                    IsSelected = true
                },

                new QuestionItem() {
                    Id = 6,
                    Question = "Have there been any social concerns since COVID-19 started? (ex. strained relations within the household, isolation from loved ones)",
                    Options =  new AnswerSetItem() {
                        Id = 6,
                        AnswerSet = new List<AnswerItem>() {
                        new AnswerItem() { Id = 22, Answer = "Not at all", Score = 0 },
                        new AnswerItem() { Id = 23, Answer = "A little", Score = 1 },
                        new AnswerItem() { Id = 24, Answer = "Somewhat", Score = 2 },
                        new AnswerItem() { Id = 25, Answer = "A lot", Score = 3 },
                        }
                    },
                    SelectedAnswer = new AnswerItem() {
                        Id = 22,
                        Answer = "Not at all",
                        Score = 0 },
                    IsSelected = true
                },

                new QuestionItem() {
                    Id = 7,
                    Question = "Have there been negavtive changes in your life as a result of COVID-19? (ex. lost job, isolation from loved ones, financial concerns)",
                    Options =  new AnswerSetItem() {
                        Id = 7,
                        AnswerSet = new List<AnswerItem>() {
                        new AnswerItem() { Id = 26, Answer = "Not at all", Score = 0 },
                        new AnswerItem() { Id = 27, Answer = "A little", Score = 1 },
                        new AnswerItem() { Id = 28, Answer = "Somewhat", Score = 2 },
                        new AnswerItem() { Id = 29, Answer = "A lot", Score = 3 },
                        }
                    },
                    SelectedAnswer = new AnswerItem() {
                        Id = 26,
                        Answer = "Not at all",
                        Score = 0 },
                    IsSelected = true
                },

                new QuestionItem() {
                    Id = 8,
                    Question = "Do you have a history of diagnosed mental illness?",
                    Options =  new AnswerSetItem() {
                        Id = 8,
                        AnswerSet = new List<AnswerItem>() {
                        new AnswerItem() { Id = 30, Answer = "No", Score = 0 },
                        new AnswerItem() { Id = 31, Answer = "Yes", Score = 1 }
                        }
                    },
                    SelectedAnswer = new AnswerItem() {
                        Id = 31,
                        Answer = "Yes",
                        Score = 1 },
                    IsSelected = true
                }

                );

            context.SaveChanges();
        }

        // Suggestions
        using (var context = new SuggestionSetContext(
            serviceProvider.GetRequiredService<DbContextOptions<SuggestionSetContext>>()))
        {
            if (context.SuggestionSetItems.Any())
            {
                return;   // Data was already seeded
            }

            context.SuggestionSetItems.AddRange(
                new SuggestionSetItem() {
                    Id = 1,
                    SuggestionSet = new List<SuggestionItem>() {
                        new SuggestionItem() { Id = 1, Suggestion = "Take a walk", Scoring = "low" },
                        new SuggestionItem() { Id = 2, Suggestion = "Eat a healthy snack", Scoring = "low" },
                        new SuggestionItem() { Id = 3, Suggestion = "Take a break from news and social media", Scoring = "low" }
                    }
                },

                new SuggestionSetItem() {
                    Id = 2,
                    SuggestionSet = new List<SuggestionItem>() {
                        new SuggestionItem() { Id = 4, Suggestion = "Meditate", Scoring = "medium" },
                        new SuggestionItem() { Id = 5, Suggestion = "Phone a trusted loved one", Scoring = "medium" },
                        new SuggestionItem() { Id = 6, Suggestion = "Start a new hobby", Scoring = "medium" }
                    }
                },

                new SuggestionSetItem() {
                    Id = 3,
                    SuggestionSet = new List<SuggestionItem>() {
                        new SuggestionItem() { Id = 7, Suggestion = "Phone your local crisis help line", Scoring = "high" },
                        new SuggestionItem() { Id = 8, Suggestion = "Speak with your doctor or therapist", Scoring = "high" }
                    }
                }
            );

            context.SaveChanges();
        }
    }
}