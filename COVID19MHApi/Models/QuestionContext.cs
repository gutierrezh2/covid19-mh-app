using Microsoft.EntityFrameworkCore;

namespace COVID19MHApi.Models {
    public class QuestionContext : DbContext
    {
        public QuestionContext(DbContextOptions<QuestionContext> options)
            : base(options)
        {

        }

        public DbSet<QuestionItem> QuestionItems { get; set; }
        //public DbSet<AnswerItem> AnswerItems { get; set; }
        //public DbSet<AnswerSets> AnswerSets { get; set; }
    }
}