using System.Text.Json.Serialization;
using backend.Utilities;

namespace backend.Models
{
    public class TaskItemDTO
    {
        public long id { get; set; }
        public string? description { get; set; }
        [JsonConverter(typeof(DateOnlyJsonConverter))]
        public DateOnly? date { get; set; }
        public bool completed { get; set; }
    }
}