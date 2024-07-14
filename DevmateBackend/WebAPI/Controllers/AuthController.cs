using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WebAPI.Entities;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost("register")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public Result Register(Models.Register.Request registerRequest)
        {
            var guid = Guid.NewGuid();
            UsersTMP.Users.Add(new User
            {
                Guid = guid,
                Name = registerRequest.Name,
                Login = registerRequest.Login,
                Password = registerRequest.Password
            });
            return new Result
            {
                Data = new Models.Register.Response
                {
                    Guid = guid,
                    Name = registerRequest.Name,
                }
            };
        }

        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<Result> Login(Models.Login.Request loginRequest)
        {
            var user = UsersTMP.Users.FirstOrDefault(x => x.Login == loginRequest.Login && x.Password == loginRequest.Password);
            if (user != null)
            {
                var claims = new List<Claim>()
                {
                    new(Types.Constants.ClaimTypes.Guid, user.Guid.ToString())
                };
                var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                var principal = new ClaimsPrincipal(identity);
                await HttpContext.SignInAsync(principal);

                return new Result
                {
                    Data = new Models.Login.Response
                    {
                        Login = loginRequest.Login,
                    }
                };
            }
            else
            {
                Response.StatusCode = StatusCodes.Status400BadRequest;
                return new Result
                {
                    Status = StatusCodes.Status400BadRequest,
                    Message = "Неверный логин или пароль"
                };
            }
        }

        [HttpGet]
        [Route("logout")]
        public async Task Logout()
        {
            await HttpContext.SignOutAsync();
        }
    }
}
