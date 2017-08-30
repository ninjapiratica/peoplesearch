using System.Collections.Generic;

namespace PeopleSearch.Web.Models
{
    public class Address
    {
        public int Id { get; set; }
        public string HouseNumber { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public State State { get; set; }
        public string ZipCode { get; set; }

        public virtual ICollection<Person> People { get; set; }

        public Address()
        {
            People = new List<Person>();
        }
    }
}