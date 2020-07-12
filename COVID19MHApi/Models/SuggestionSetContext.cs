using Microsoft.EntityFrameworkCore;

// PURPOSE: Create a SuggestionSet Context for the SuggestionSet DB, for querying or saving data to the DB.

namespace COVID19MHApi.Models {
    public class SuggestionSetContext : DbContext
    {
        public SuggestionSetContext(DbContextOptions<SuggestionSetContext> options)
            : base(options)
        {

        }

        // Entities: SuggestionSetItem
        public DbSet<SuggestionSetItem> SuggestionSetItems { get; set; } 
    }
}