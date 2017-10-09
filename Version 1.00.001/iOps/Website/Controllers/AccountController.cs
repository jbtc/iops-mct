using System.Linq;
using System.Configuration;
using System.Web.Mvc;
using iOps.Core.Model;
using iOps.Core.Security;
using iOps.Core.Service;
using iOps.Website.Dto;
using iOps.Data;

namespace iOps.Website.Controllers
{
    public class AccountController : BaseController
    {
        private readonly IFormsAuthentication formsAuth;
        private readonly IUserService us;
        private iopsWeatherEntities db = new iopsWeatherEntities();

        public AccountController(IFormsAuthentication formsAuth, IUserService us)
        {
            this.formsAuth = formsAuth;
            this.us = us;
        }

        public ActionResult SignIn()
        {
            return View(new SignInInput{
                Username = ConfigurationManager.AppSettings["DebugUserName"] != null?ConfigurationManager.AppSettings["DebugUserName"]:null, 
                Password = ConfigurationManager.AppSettings["DebugPassword"] != null?ConfigurationManager.AppSettings["DebugPassword"]:null});
        }

        [HttpPost]
        public ActionResult SignIn(SignInInput input)
        { 
            if (!ModelState.IsValid)
            {
                input.Password = null;
                input.Username = null;
                input.Remember = false;
                return View(input);
            }

            string _clientName = "MCT";
            User user = us.Get(_clientName ,input.Username, input.Password);
            if (user == null)
            {
                ModelState.AddModelError("CustomError", "Invalid Username or Password.");
                return RedirectToAction("SignIn", "Account");
            }

            formsAuth.SignIn(user, input.Remember);
            return RedirectToAction("ShowAirport", "Airport", new { area = "Airport", clientName = _clientName, numberOfScreens = user.UsersXrefScreens.Count() });

        }

        public ActionResult SignOff()
        {
            formsAuth.SignOut();
            return RedirectToAction("SignIn", "Account");
        }
    }
}