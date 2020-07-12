using Microsoft.EntityFrameworkCore;

// PURPOSE: Create a Database Context for the Questions DB, for querying or saving data to the DB.

namespace COVID19MHApi.Models {
    public class QuestionContext : DbContext
    {
        public QuestionContext(DbContextOptions<QuestionContext> options)
            : base(options)
        {

        }

        // Entities: QuestionItem
        public DbSet<QuestionItem> QuestionItems { get; set; }
    }
}