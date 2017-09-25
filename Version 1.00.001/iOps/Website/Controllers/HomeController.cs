using System.Web.Mvc;

namespace iOps.Website.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController() 
        {
        }

        public ActionResult ViewCharts()
        {
            return View();
        }
        public ActionResult ViewChartsGraph()
        {
            return View();
        }
    }
}