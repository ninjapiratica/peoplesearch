using PeopleSearch.Web.DAL;
using PeopleSearch.Web.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PeopleSearch.Web
{
    public class PersonContextInitializer : DropCreateDatabaseIfModelChanges<PersonContext>
    {
        protected override void Seed(PersonContext context)
        {
            var firstNames = new string[] { "Rosemary", "Shawn", "Judith", "Angelo", "Harry", "Sean", "Vicki", "Delores", "Salvatore", "Myron" };
            var lastNames = new string[] { "Barber", "Frank", "Cannon", "Boone", "Simmons", "Goodman", "Gonzalez", "Arnold", "Little", "Davidson" };
            var streets = new string[] { "Main St.", "Center St.", "Spencer Ave.", "Juniper Grove", "550 E" };
            var cities = new string[] { "Pleasant View", "Happy Valley", "Springfield", "Trenton", "Alister" };
            var states = Enum.GetValues(typeof(State)).OfType<State>().ToArray();
            var zipCodes = new string[] { "58102", "97681", "12345", "48483", "85326" };
            var interests = new string[] { "Sports", "Volleyball", "Soccer", "People Watching", "Dancing", "Crafts", "Art", "Movies", "Acting" };

            var rand = new Random();
            var addresses = new List<Address>();
            for (int i = 0; i < 5; i++)
            {
                addresses.Add(new Address
                {
                    HouseNumber = rand.Next(100, 900).ToString(),
                    StreetAddress = streets[rand.Next(0, streets.Length)],
                    City = cities[rand.Next(0, cities.Length)],
                    State = states[rand.Next(0, states.Length)],
                    ZipCode = zipCodes[rand.Next(0, zipCodes.Length)]
                });
            }

            var people = new List<Person>();
            for (int i = 0; i < 20; i++)
            {
                var interestIds = new List<int>();
                var nextId = rand.Next(0, interests.Length);
                do
                {
                    interestIds.Add(nextId);
                    nextId = rand.Next(0, interests.Length);
                } while (!interestIds.Contains(nextId));

                people.Add(new Person
                {
                    FirstName = firstNames[rand.Next(0, firstNames.Length)],
                    LastName = lastNames[rand.Next(0, lastNames.Length)],
                    DateOfBirth = new DateTime(rand.Next(1950, 1990), rand.Next(1, 13), rand.Next(1, 29)),
                    ImageUrl = $"/content/images/{rand.Next(0, 10)}.jpg",
                    Address = addresses[rand.Next(0, addresses.Count)],
                    Interests = interestIds.Select(interestId => new Interest
                    {
                        Description = interests[interestId]
                    }).ToList()
                });
            }

            context.People.AddRange(people);
            context.SaveChanges();

            base.Seed(context);
        }
    }
}