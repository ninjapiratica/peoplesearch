using System.Collections.Generic;

namespace PeopleSearch.Web.Models.People
{
    public class PersonModel
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }

        public AddressModel Address { get; set; }

        public List<string> Interests { get; set; }
    }
}