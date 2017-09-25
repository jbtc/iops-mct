using iOps.Website.App_Code;
using System.Web.Mvc;
using iOps.Core.Model;
using iOps.Data;
using System.Linq;
using iOps.Website.Controllers;
using System;

namespace iOps.Website.Areas.NetworkMonitor.Controllers
{
    public class NetworkMonitorController : BaseController
    {
        private iopsContext db_iops = new iopsContext();
        private iopsWeatherEntities db = new iopsWeatherEntities();

        private void setNetworkMonitorTemps(string gateNum) {
            TempData["GateNumber"] = gateNum;
        }

        [CustomAuthorize]
        public PartialViewResult ShowNetworkMonitor(string gateNum)
        {
            setNetworkMonitorTemps(gateNum);
            return PartialView("_ShowNetworkMonitor");
        }
    }
}