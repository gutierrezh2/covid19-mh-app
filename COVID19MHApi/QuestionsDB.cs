using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using COVID19MHApi.Models;
using System;
using System.Linq;

using System.Text.Json;
using System.Text.Json.Serialization;

// References: https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/working-with-sql?view=aspnetcore-3.0&tabs=visual-studio, https://exceptionnotfound.net/ef-core-inmemory-asp-net-core-store-database/

public class QuestionsDB {
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new QuestionContext(
            serviceProvider.GetRequiredService<DbContextOptions<QuestionContext>>()))
        {
            // Look for any board games.
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
                }

                );

            context.SaveChanges();
        }
    }
}