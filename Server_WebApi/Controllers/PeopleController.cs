﻿using System;
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
using System.Diagnostics;

namespace Server_WebApi.Controllers
{
    public class PeopleController : ApiController
    {
        private WebDataEntities db = new WebDataEntities();

        public PeopleController() { }

        public PeopleController(WebDataEntities entity)
        {
            this.db = entity;
        }
               
        [Authorize]        
        [HttpGet]
        [Route("api/People")]
        public IQueryable<Person> GetPeople()
        {
            return db.People;
        }

        // GET: api/RestrictedUsePeople
        [Authorize]
        //[Authorize(Roles = "WebSiteUser")]
        [HttpGet]
        [Route("api/RestrictedUsePeople")]
        public IQueryable<Person> GetRestrictedUsePeople()
        {
            return db.People;
        }

        //// GET: api/People/5
        //[ResponseType(typeof(Person))]
        //public IHttpActionResult GetPerson(double id)
        //{
        //    Person person = db.People.Find(id);
        //    if (person == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(person);
        //}

        //// PUT: api/People/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutPerson(double id, Person person)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != person.id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(person).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!PersonExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/People
        //[ResponseType(typeof(Person))]
        //public IHttpActionResult PostPerson(Person person)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.People.Add(person);

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (PersonExists(person.id))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtRoute("DefaultApi", new { id = person.id }, person);
        //}

        //// DELETE: api/People/5
        //[ResponseType(typeof(Person))]
        //public IHttpActionResult DeletePerson(double id)
        //{
        //    Person person = db.People.Find(id);
        //    if (person == null)
        //    {
        //        return NotFound();
        //    }

        //    db.People.Remove(person);
        //    db.SaveChanges();

        //    return Ok(person);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PersonExists(double id)
        {
            return db.People.Count(e => e.id == id) > 0;
        }
    }
}