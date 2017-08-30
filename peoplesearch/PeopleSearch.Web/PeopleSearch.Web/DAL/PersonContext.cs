using PeopleSearch.Web.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace PeopleSearch.Web.DAL
{
    public class PersonContext : DbContext
    {
        public PersonContext()
            : base("PersonContext")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }

        public DbSet<Person> People { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            base.OnModelCreating(modelBuilder);
        }
    }
}