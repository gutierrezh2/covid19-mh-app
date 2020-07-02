using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using COVID19MHApi.Models;
using System;
using System.Linq;

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
                    /*Options = new AnswerSetItem() {
                        Id = 1,
                        AnswerSet = new List<AnswerItem> {
                        new AnswerItem(1, "Really great", 0),
                        new AnswerItem(2, "Good", 1),
                        new AnswerItem(3, "Okay", 2),
                        new AnswerItem(4, "Bad", 3),
                        new AnswerItem(5, "Really terrible", 4)}
                    },
                    SelectedAnswer = null,*/
                    IsSelected = false
                });

            context.SaveChanges();
        }
    }
}