using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Routing;

namespace Server_WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            // return JSON format on all requests          
            GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            GlobalConfiguration.Configuration.Formatters.Add(new JsonMediaTypeFormatter());
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            if ((Context.Request.Path.Contains("api/") || Context.Request.Path.Contains("odata/")) && Context.Request.HttpMethod == "OPTIONS")
            {
                Context.Response.AddHeader("Access-Control-Allow-Origin", Context.Request.Headers["Origin"]);
                Context.Response.AddHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                Context.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
                Context.Response.AddHeader("Access-Control-Allow-Credentials", "true");
                Context.Response.End();
            }
        }       
    }
}
