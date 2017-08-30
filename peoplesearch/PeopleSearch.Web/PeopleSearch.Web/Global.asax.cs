using Newtonsoft.Json.Serialization;
using PeopleSearch.Web.App_Start;
using System.Data.Entity;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace PeopleSearch.Web
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            IOCConfig.RegisterDependencies(GlobalConfiguration.Configuration);

            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);

            // API Routes
            GlobalConfiguration.Configure(WebApiConfig.Register);
            // MVC Routes
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            // XML/JSON Formatters
            GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            Database.SetInitializer(new PersonContextInitializer());
        }
    }
}
