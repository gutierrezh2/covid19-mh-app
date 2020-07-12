using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using COVID19MHApi.Models;
using System;
using System.Linq;

// References: https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/working-with-sql?view=aspnetcore-3.0&tabs=visual-studio, https://exceptionnotfound.net/ef-core-inmemory-asp-net-core-store-database/

// PURPOSE: Contains all the seeded data for all the Question items and SuggestionSet items, so the data is already there when the web API is initalized.

public class C19MHDatabase {
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new QuestionContext(
            serviceProvider.GetRequiredService<DbContextOptions<QuestionContext>>()))
        {
            // Data already seeded
            if (context.QuestionItems.Any())
            {
                return;
            }

            // Seeded Question items
            context.QuestionItems.AddRange(
                new QuestionItem() {
                    Id = 1,
                    Question = "How are you right now?",
                    Options = AnswerSetDatabase.AnswerSet1
                },

                new QuestionItem() {
                    Id = 2,
                    Question = "How much has your mood dropped or negatively changed (ex. more stressed) since COVID-19 started?",
                    Options = AnswerSetDatabase.AnswerSet2
                },

                new QuestionItem() {
                    Id = 3,
                    Question = "How well have you been able to maintain your daily routine/life since COVID-19 started?",
                    Options = AnswerSetDatabase.AnswerSet3
                },

                new QuestionItem() {
                    Id = 4,
                    Question = "Has there been a negative change in your sleeping habits? (ex. too much or too little sleep)",
                    Options = AnswerSetDatabase.AnswerSet2
                },

                new QuestionItem() {
                    Id = 5,
                    Question = "Has there been a negative change in your eating habits? (ex. increased or decreased eating)",
                    Options = AnswerSetDatabase.AnswerSet2
                },

                new QuestionItem() {
                    Id = 6,
                    Question = "Have there been any social concerns since COVID-19 started? (ex. strained relations within the household, isolation from loved ones)",
                    Options = AnswerSetDatabase.AnswerSet2
                },

                new QuestionItem() {
                    Id = 7,
                    Question = "Have there been negavtive changes in your life as a result of COVID-19? (ex. lost job, isolation from loved ones, financial concerns)",
                    Options = AnswerSetDatabase.AnswerSet2
                },

                new QuestionItem() {
                    Id = 8,
                    Question = "Do you have a history of diagnosed mental illness?",
                    Options = AnswerSetDatabase.AnswerSet4
                }

                );

            context.SaveChanges();
        }

        // SuggestionSets items
        using (var context = new SuggestionSetContext(
            serviceProvider.GetRequiredService<DbContextOptions<SuggestionSetContext>>()))
        {
            // Data already seeded
            if (context.SuggestionSetItems.Any())
            {
                return;
            }

            // Seeded SuggestionSets items
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