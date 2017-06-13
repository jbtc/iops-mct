using iOps.Website.App_Code;
using System.Web.Mvc;
using iOps.Website.Controllers;
using System.Configuration;

namespace iOps.Website.Areas.RTU.Controllers
{
    public class RTUController : BaseController
    {
        // GET: RTU/ShowRTU
        //[CustomAuthorize(Roles="admin")]
        [CustomAuthorize]
        public PartialViewResult ShowRTU(string gateNum,string zoneNum)
        {
            TempData["GateNumber"] = gateNum;
            TempData["ZoneNumber"] = zoneNum;
            TempData["ClientAbbr"] = ConfigurationManager.AppSettings["ClientShortName"].ToString();
            return PartialView("_ShowRTU");
        }
    }
}