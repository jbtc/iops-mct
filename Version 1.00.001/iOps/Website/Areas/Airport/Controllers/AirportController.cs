using iOps.Website.App_Code;
using System.Web.Mvc;
using System.IO;
using System.Web.UI;
using iOps.Data;
using iOps.Core.Model;
using System.Linq;
using System.Xml.Linq;
using System.Collections.Generic;
using iOps.Website.Controllers;
using iOps.Service.Security;
using Newtonsoft.Json;

namespace iOps.Website.Areas.Airport.Controllers
{
    //[CustomAuthorize(Roles = "admin")]
    //[CustomAuthorize]
    public class AirportController : BaseController
    {
        // GET: Airport/ShowAirport
        //[OutputCache(Duration=int.MaxValue, VaryByParam="none",Location=OutputCacheLocation.Server)]
        public PartialViewResult ShowAirport(string clientName, int numberOfScreens)
        {
            int authLevel = 0;
            if(base.User.SecurityRoles.Where(r => r.Name.Contains("Admin")).Count() > 0)
                authLevel = 4;
            else if(base.User.SecurityRoles.Where(r => r.Name.Contains("Maintenance2")).Count() > 0)
                authLevel = 3;
            else if(base.User.SecurityRoles.Where(r => r.Name.Contains("Maintenance1")).Count() > 0)
                authLevel = 2;
            else if(base.User.SecurityRoles.Where(r => r.Name.Contains("User")).Count() > 0)
                authLevel = 1;

            TempData["AuthLevel"] = authLevel;
            TempData["ClientAbbr"] = clientName;


            List<object> gateData = new List<object>();  
            foreach( UsersXrefScreen screen in base.User.UsersXrefScreens.Where(s => s.Screen.DefaultIconType == "Gate").OrderBy(s => s.DisplayOrder))
            {
                //XDocument xmlData = XDocument.Load(new StringReader(screen.Screen.ScreenLayout));
                //var ajaxData = xmlData.Element("Screen-Layout").Element("AjaxData").Value;

                dynamic ajaxData = JsonConvert.DeserializeObject(XDocument.Load(new StringReader(screen.Screen.ScreenLayout)).Element("Screen-Layout").Element("AjaxData").Value);
                var zoneNum = ajaxData.zoneNum.ToString();
                var gateNum = ajaxData.gateNum.ToString();
                gateData.Add(new { DisplayOrder = screen.DisplayOrder, DisplayName = screen.Screen.DisplayName, Zone = zoneNum, Gate = gateNum });


            }
            TempData["Screens"] = gateData;
            //TempData["Screens"] = base.User.UsersXrefScreens.Select(r => new { r.DisplayOrder, r.Screen.DisplayName, r.Screen.DefaultIconType, XDocument. }).OrderBy(r => r.DisplayOrder).ToArray();

            switch (clientName)
            {
                case "CID":
                    TempData["CIDMaxScreens"] = 7;
                    return PartialView("_ShowCIDAirport");
                case "SLL":
                    TempData["CIDMaxScreens"] = 10;
                    return PartialView("_ShowSLLAirport");
                case "JFK":
                    TempData["CIDMaxScreens"] = 8;
                    return PartialView("_ShowJFKAirport");
                case "MCT":
                    TempData["CIDMaxScreens"] = 43;
                    return PartialView("_ShowMCTAirport");
                default:
                    return PartialView();
            }
        }
    }
}