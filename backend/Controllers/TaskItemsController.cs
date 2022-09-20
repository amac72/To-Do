using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskItemsController : ControllerBase
    {
        private readonly TaskContext _context;

        public TaskItemsController(TaskContext context)
        {
            _context = context;
        }

        // GET: api/TaskItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskItemDTO>>> GetTaskItems()
        {
            return await _context.TaskItems
                .Select(x => ItemToDTO(x))
                .ToListAsync();
        }

        // GET: api/TaskItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItemDTO>> GetTaskItem(long id)
        {
            if (_context.TaskItems == null)
            {
                return NotFound();
            }
            var taskItem = await _context.TaskItems.FindAsync(id);

            if (taskItem == null)
            {
                return NotFound();
            }

            return ItemToDTO(taskItem);
        }

        // PUT: api/TaskItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(long id, TaskItemDTO taskItemDTO)
        {
            if (id != taskItemDTO.id)
            {
                return BadRequest();
            }

            _context.Entry(taskItemDTO).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskItemExists(id))
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

        // POST: api/TaskItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TaskItemDTO>> CreateTaskItem(TaskItemDTO taskItemDTO)
        {
            var taskItem = new TaskItem
            {
                id = taskItemDTO.id,
                description = taskItemDTO.description,
                date = taskItemDTO.date,
                completed = taskItemDTO.completed
            };

            _context.TaskItems.Add(taskItem);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTaskItem", new { id = taskItem.Id }, taskItem);
            return CreatedAtAction(nameof(GetTaskItem), new { id = taskItemDTO.id }, taskItemDTO);
        }

        // DELETE: api/TaskItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItem(long id)
        {
            if (_context.TaskItems == null)
            {
                return NotFound();
            }
            var taskItem = await _context.TaskItems.FindAsync(id);
            if (taskItem == null)
            {
                return NotFound();
            }

            _context.TaskItems.Remove(taskItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TaskItemExists(long id)
        {
            return (_context.TaskItems?.Any(e => e.id == id)).GetValueOrDefault();
        }

        private static TaskItemDTO ItemToDTO(TaskItem taskItem) =>
            new TaskItemDTO
            {
                id = taskItem.id,
                description = taskItem.description,
                date = taskItem.date,
                completed = taskItem.completed
            };
    }
}
