using PeopleSearch.Web.DAL;
using PeopleSearch.Web.Models;
using PeopleSearch.Web.Models.People;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace PeopleSearch.Web.Controllers
{
    public class PeopleController : ApiController
    {
        private PersonContext _context;

        public PeopleController(PersonContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<PersonModel>> Get(string search = null)
        {
            var query = _context.People
                .Include(p => p.Address)
                .Include(p => p.Interests);

            if (!string.IsNullOrWhiteSpace(search))
                query = query.Where(p => p.FirstName.Contains(search) || p.LastName.Contains(search));

            var people = await query.ToListAsync();

            return people.Select(p => ConvertToModel(p));
        }

        private PersonModel ConvertToModel(Person person)
        {
            AddressModel address = null;
            if (person.Address != null)
            {
                address = new AddressModel
                {
                    City = person.Address.City,
                    HouseNumber = person.Address.HouseNumber,
                    StreetAddress = person.Address.StreetAddress,
                    ZipCode = person.Address.ZipCode,
                    State = person.Address.State.ToString().Replace('_', ' ')
                };
            }

            return new PersonModel
            {
                Id = person.Id,
                FirstName = person.FirstName,
                LastName = person.LastName,
                ImageUrl = person.ImageUrl,
                Age = person.Age,

                Address = address,

                Interests = person.Interests.Select(i => i.Description).ToList()
            };
        }
    }
}
