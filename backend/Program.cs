using Microsoft.EntityFrameworkCore;
using backend.Models;

var builder = WebApplication.CreateBuilder(args);
var connectionString = "server=localhost;user=root;password=;database=todo";
var serverVersion = new MySqlServerVersion(new Version(8, 0, 29));

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<TaskContext>(opt =>
    opt.UseMySql(connectionString, serverVersion));
//builder.Services.AddSwaggerGen(c =>
//{
//    c.SwaggerDoc("v1", new() { Title = "TodoApi", Version = "v1" });
//});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    //app.UseSwagger();
    //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TodoApi v1"));
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();