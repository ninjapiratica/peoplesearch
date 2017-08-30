using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;

namespace PeopleSearch.Web.App_Start
{
    public class IOCConfig
    {
        public static void RegisterDependencies(HttpConfiguration config)
        {
            var builder = new ContainerBuilder();
            
            // Use this class's assembly to find the controllers
            builder.RegisterControllers(typeof(IOCConfig).Assembly);
            builder.RegisterApiControllers(typeof(IOCConfig).Assembly);

            builder.RegisterType(typeof(DAL.PersonContext)).InstancePerDependency();

            // Set the dependency resolver to be Autofac.
            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }
    }
}