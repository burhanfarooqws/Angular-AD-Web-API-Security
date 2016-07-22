// --------------------------------------------------------------------------------------------------------------------
// <copyright file="RouteConfig.cs" company="Microsoft">
//   Copyright © 2015 Microsoft
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.AngularClient_Web
{
    using System.Web.Routing;

    using App.AngularClient_Web.Routing;

    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.Add("Default", new DefaultRoute());
        }
    }
}
