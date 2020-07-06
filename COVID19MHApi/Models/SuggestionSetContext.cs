using Microsoft.EntityFrameworkCore;

namespace COVID19MHApi.Models {
    public class SuggestionSetContext : DbContext
    {
        public SuggestionSetContext(DbContextOptions<SuggestionSetContext> options)
            : base(options)
        {

        }

        public DbSet<SuggestionSetItem> SuggestionSetItems { get; set; } //*
    }
}