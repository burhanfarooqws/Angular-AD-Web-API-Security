using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Server_WebApi.Models;
using System.Security.Principal;

namespace Server_WebApi.Controllers
{
    public class AandroidConversionsController : ApiController
    {
        private WebDataEntities db = new WebDataEntities();
       
        [Authorize]
        [Authorize(Roles = "Field-Coordinator")]
        [HttpGet]
        [Route("api/AandroidConversions")]        
        public IQueryable<AandroidConversion> GetAandroidConversions()
        {
            var identity = User.Identity as WindowsIdentity;

            var groupNames = from id in identity.Groups
                             select id.Translate(typeof(NTAccount)).Value;

            return db.AandroidConversions;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }      
    }
}