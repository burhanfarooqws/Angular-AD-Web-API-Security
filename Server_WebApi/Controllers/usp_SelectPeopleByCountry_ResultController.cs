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

namespace Server_WebApi.Controllers
{
    public class usp_SelectPeopleByCountry_ResultController : ApiController
    {
        private WebDataEntities db = new WebDataEntities();

        // GET: api/usp_SelectPeopleByCountry_Result
        public IQueryable<usp_SelectPeopleByCountry_Result> Getusp_SelectPeopleByCountry_Result()
        {
            return db.usp_SelectPeopleByCountry_Result;
        }

        // GET: api/usp_SelectPeopleByCountry_Result/5
        [ResponseType(typeof(usp_SelectPeopleByCountry_Result))]
        public IHttpActionResult Getusp_SelectPeopleByCountry_Result(double id)
        {
            usp_SelectPeopleByCountry_Result usp_SelectPeopleByCountry_Result = db.usp_SelectPeopleByCountry_Result.Find(id);
            if (usp_SelectPeopleByCountry_Result == null)
            {
                return NotFound();
            }

            return Ok(usp_SelectPeopleByCountry_Result);
        }

        // PUT: api/usp_SelectPeopleByCountry_Result/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putusp_SelectPeopleByCountry_Result(double id, usp_SelectPeopleByCountry_Result usp_SelectPeopleByCountry_Result)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usp_SelectPeopleByCountry_Result.id)
            {
                return BadRequest();
            }

            db.Entry(usp_SelectPeopleByCountry_Result).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!usp_SelectPeopleByCountry_ResultExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/usp_SelectPeopleByCountry_Result
        [ResponseType(typeof(usp_SelectPeopleByCountry_Result))]
        public IHttpActionResult Postusp_SelectPeopleByCountry_Result(usp_SelectPeopleByCountry_Result usp_SelectPeopleByCountry_Result)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.usp_SelectPeopleByCountry_Result.Add(usp_SelectPeopleByCountry_Result);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (usp_SelectPeopleByCountry_ResultExists(usp_SelectPeopleByCountry_Result.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = usp_SelectPeopleByCountry_Result.id }, usp_SelectPeopleByCountry_Result);
        }

        // DELETE: api/usp_SelectPeopleByCountry_Result/5
        [ResponseType(typeof(usp_SelectPeopleByCountry_Result))]
        public IHttpActionResult Deleteusp_SelectPeopleByCountry_Result(double id)
        {
            usp_SelectPeopleByCountry_Result usp_SelectPeopleByCountry_Result = db.usp_SelectPeopleByCountry_Result.Find(id);
            if (usp_SelectPeopleByCountry_Result == null)
            {
                return NotFound();
            }

            db.usp_SelectPeopleByCountry_Result.Remove(usp_SelectPeopleByCountry_Result);
            db.SaveChanges();

            return Ok(usp_SelectPeopleByCountry_Result);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool usp_SelectPeopleByCountry_ResultExists(double id)
        {
            return db.usp_SelectPeopleByCountry_Result.Count(e => e.id == id) > 0;
        }
    }
}