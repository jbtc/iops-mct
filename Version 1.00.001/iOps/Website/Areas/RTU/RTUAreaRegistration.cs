using System.Web.Mvc;

namespace iOps.Website.Areas.RTU
{
    public class RTUAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "RTU";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "RTU_default",
                "RTU/{controller}/{action}/{id}",
                new { action = "ShowRTU", id = UrlParameter.Optional }
            );
        }
    }
}