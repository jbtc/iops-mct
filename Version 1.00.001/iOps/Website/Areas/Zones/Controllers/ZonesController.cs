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
using System.Configuration;

namespace iOps.Website.Areas.Zones.Controllers
{
    //[CustomAuthorize(Roles = "admin")]
    //[CustomAuthorize]
    public class ZonesController : BaseController
    {       
        // Zone/ShowZone
        
        public PartialViewResult ShowZone(string clientName, string zoneNum)
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
            TempData["ZoneNumber"] = zoneNum;


            List<object> gateData = new List<object>();  
            foreach( UsersXrefScreen screen in base.User.UsersXrefScreens.Where(s => s.Screen.DefaultIconType == "Gate").OrderBy(s => s.DisplayOrder))
            {
                dynamic ajaxData = JsonConvert.DeserializeObject(XDocument.Load(new StringReader(screen.Screen.ScreenLayout)).Element("Screen-Layout").Element("AjaxData").Value);
                if (ajaxData.zoneNum.ToString() == zoneNum)
                {
                    var gateNum = ajaxData.gateNum.ToString();
                    gateData.Add(new { DisplayOrder = screen.DisplayOrder, DisplayName = screen.Screen.DisplayName, Zone = zoneNum, Gate = gateNum });
                }
            }
            TempData["Screens"] = gateData;

            List<object> zoneData = new List<object>();  
            foreach( UsersXrefScreen screen in base.User.UsersXrefScreens.Where(s => s.Screen.DefaultIconType == "Zone").OrderBy(s => s.DisplayOrder))
            {
                dynamic ajaxData = JsonConvert.DeserializeObject(XDocument.Load(new StringReader(screen.Screen.ScreenLayout)).Element("Screen-Layout").Element("AjaxData").Value);
                zoneData.Add(new { DisplayOrder = screen.DisplayOrder, DisplayName = screen.Screen.DisplayName, ZoneNumber = ajaxData.zoneNum.ToString() });
            }
            TempData["Zones"] = zoneData;

            switch (clientName)
            {
                case "JFK":
                    TempData["CIDMaxScreens"] = 8;
                    return PartialView("_ShowJFKZone" + zoneNum);
                case "MCT":
                    TempData["CIDMaxScreens"] = 43;
                    return PartialView("_ShowMCTZone");
                default:
                    return PartialView();
            }
        }
    }
}