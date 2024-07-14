namespace WebAPI.Entities
{
    public class User
    {
        public Guid Guid { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Login { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
    }
}
