namespace WebAPI.Models
{
    public class Result
    {
        public int Status { get; set; }

        public string Message { get; set; } = string.Empty;

        public object? Data { get; set; }

        public Result()
        {
            Status = StatusCodes.Status200OK;
            Message = "OK";
        }
    }
}
