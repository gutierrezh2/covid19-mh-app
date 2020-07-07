using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using COVID19MHApi.Models;

// PURPOSE: Contains the HTTP Methods for the SuggestionSetItems DB: GET (Array of SuggestionSets), GET (a single SuggestionSet), PUT (Upate a Single SuggestionSet), POST (Add a new SuggestionSet), and DELETE (a single SuggestionSet); also includes a method to see if a SuggestionSet ID exists, given an id value
    // Scaffolded by "dotnet"
namespace COVID19MHApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class SuggestionSetItemsController : ControllerBase
    {
        private readonly SuggestionSetContext _context;

        public SuggestionSetItemsController(SuggestionSetContext context)
        {
            _context = context;
        }

        // GET: api/SuggestionSetItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SuggestionSetItem>>> GetSuggestionSetItems()
        {
            // Includes SuggestionSetItem and a SuggestionSet
            return await _context.SuggestionSetItems
                .Include( s => s.SuggestionSet )
                .ToListAsync();
        }

        // GET: api/SuggestionSetItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SuggestionSetItem>> GetSuggestionSetItem(int id)
        {
            var suggestionSetItem = await _context.SuggestionSetItems.FindAsync(id);

            if (suggestionSetItem == null)
            {
                return NotFound();
            }

            return suggestionSetItem;
        }

        // PUT: api/SuggestionSetItems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSuggestionSetItem(int id, SuggestionSetItem suggestionSetItem)
        {
            if (id != suggestionSetItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(suggestionSetItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SuggestionSetItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SuggestionSetItems
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SuggestionSetItem>> PostSuggestionSetItem(SuggestionSetItem suggestionSetItem)
        {
            _context.SuggestionSetItems.Add(suggestionSetItem);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetSuggestionSetItem", new { id = suggestionSetItem.Id }, suggestionSetItem);
            return CreatedAtAction(nameof(GetSuggestionSetItem), new { id = suggestionSetItem.Id }, suggestionSetItem);
        }

        // DELETE: api/SuggestionSetItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SuggestionSetItem>> DeleteSuggestionSetItem(int id)
        {
            var suggestionSetItem = await _context.SuggestionSetItems.FindAsync(id);
            if (suggestionSetItem == null)
            {
                return NotFound();
            }

            _context.SuggestionSetItems.Remove(suggestionSetItem);
            await _context.SaveChangesAsync();

            return suggestionSetItem;
        }

        private bool SuggestionSetItemExists(int id)
        {
            return _context.SuggestionSetItems.Any(e => e.Id == id);
        }
    }
}
