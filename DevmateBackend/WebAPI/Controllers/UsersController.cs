using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        [Route("me")]
        public Result GetMe()
        {
            var guidClaim = HttpContext.User.Claims.First(x => x.Type == Types.Constants.ClaimTypes.Guid);
            var guid = Guid.Parse(guidClaim.Value);
            var user = UsersTMP.Users.FirstOrDefault(x => x.Guid == guid);
            if (user != null)
            {
                return new Result
                {
                    Data = new Models.User.UserModel
                    {
                        Guid = user.Guid,
                        Name = user.Name,
                    },
                };
            }
            else
            {
                return new Result
                {
                    Status = StatusCodes.Status404NotFound,
                    Message = "Нет такого пользователя"
                };
            }
        }
    }
}
