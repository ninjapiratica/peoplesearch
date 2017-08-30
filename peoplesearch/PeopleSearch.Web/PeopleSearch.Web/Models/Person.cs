using System;
using System.Collections.Generic;

namespace PeopleSearch.Web.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }

        public int Age
        {
            get
            {
                var now = DateTime.UtcNow;
                var age = now.Year - DateOfBirth.Year;

                if (now.Month < DateOfBirth.Month)
                    age--;
                else if (now.Month == DateOfBirth.Month && now.Day < DateOfBirth.Day)
                    age--;

                return age;
            }
        }

        public Address Address { get; set; }

        public virtual ICollection<Interest> Interests { get; set; }

        public Person()
        {
            Interests = new List<Interest>();
        }
    }
}