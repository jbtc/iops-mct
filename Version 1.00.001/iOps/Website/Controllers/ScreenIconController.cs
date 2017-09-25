using System.Web.Mvc;
using iOps.Core.Model;
using iOps.Data;
using System.Linq;
using System.Xml.Linq;
using Newtonsoft.Json;
using System.IO;

namespace iOps.Website.Controllers
{
    public class ScreenIconController : BaseController
    {
        private iopsContext db_iops = new iopsContext();
        private iopsWeatherEntities db = new iopsWeatherEntities();

        // GET: ScreenIcon
        [HttpGet]
        public PartialViewResult GetScreenIcons(string clientName)
        {
            int screenNumber = db_iops.Screens.Where(s => s.Name.StartsWith(clientName) && !s.IsDeleted).OrderBy(s => s.DefaultDisplayOrder).Count();
            TempData["MaxScreens"] = screenNumber;
            TempData["ClientName"] = clientName;
            return PartialView("_ScreenIcons");
        }
    }
}