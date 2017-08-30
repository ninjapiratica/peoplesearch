namespace PeopleSearch.Web.Models
{
    public class Interest
    {
        public int Id { get; set; }
        public int PersonId { get; set; }
        public string Description { get; set; }

        public Person Person { get; set; }
    }
}