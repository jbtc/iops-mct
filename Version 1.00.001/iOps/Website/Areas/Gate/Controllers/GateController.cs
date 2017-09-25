using System.Web.Mvc;
using System.Linq;
using System.Configuration;
using iOps.Website.Controllers;
using iOps.Core.Model;
using iOps.Data;

namespace iOps.Website.Areas.Gate.Controllers
{
    public class GateController : BaseController
    {
        private iopsContext db_iops = new iopsContext();
        private iopsWeatherEntities db = new iopsWeatherEntities();

        private void setGateTemps(string gateNum,string zoneNum) {
            var client = ConfigurationManager.AppSettings["ClientShortName"].ToString();
            var db = new iOps.Core.Model.iopsContext();
            var dbData = db.Screens.FirstOrDefault(s => s.Name.StartsWith(client) && s.Name.Contains(gateNum) && !s.IsDeleted);
            int authLevel = 0;
            if(base.User.SecurityRoles.Where(r => r.Name.Contains("Admin")).Count() > 0)
                authLevel = 4;
            else if(base.User.SecurityRoles.Where(r => r.Name.Contains("Maintenance2")).Count() > 0)
                authLevel = 3;
            else if(base.User.SecurityRoles.Where(r => r.Name.Contains("Maintenance1")).Count() > 0)
                authLevel = 2;
            else if(base.User.SecurityRoles.Where(r => r.Name.Contains("User")).Count() > 0)
                authLevel = 1;

            TempData["GateNumber"] = gateNum;
            TempData["GateLabel"] = dbData.DisplayName;
            TempData["ZoneNumber"] = zoneNum;
            TempData["ZoneScreeenNumber"] = dbData.DefaultDisplayOrder.ToString();
            TempData["ClientAbbr"] = client;

            TempData["AuthLevel"] = authLevel;
        }

        public PartialViewResult ShowGates(string gateNum,string zoneNum)
        {
            setGateTemps(gateNum,zoneNum);
            return PartialView("_ShowGates");            
        }
    }
}