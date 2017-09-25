using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.Reporting.WebForms;

namespace iOps.Website.Reports
{
    public partial class ReportTemplate : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                try
                {
                    String reportsUrl = System.Configuration.ConfigurationManager.AppSettings["SSRSReportsUrl"].ToString();
                    String reportsFolder = System.Configuration.ConfigurationManager.AppSettings["SSRSReportsFolder"].ToString();
                    String reportsUser = System.Configuration.ConfigurationManager.AppSettings["SSRSReportsUser"].ToString();
                    String reportsPassword = System.Configuration.ConfigurationManager.AppSettings["SSRSReportsPassword"].ToString();
                    String reportsDomain = System.Configuration.ConfigurationManager.AppSettings["SSRSReportsDomain"].ToString();

                    rvSiteMapping.Height = Unit.Pixel(Convert.ToInt32(Request["Height"]) - 58);
                    rvSiteMapping.ProcessingMode = Microsoft.Reporting.WebForms.ProcessingMode.Remote;

                    IReportServerCredentials irsc = new CustomReportCredentials(reportsUser, reportsPassword, reportsDomain); // e.g.: ("demo-001", "123456789", "ifc")
                    rvSiteMapping.ServerReport.ReportServerCredentials = irsc;

                    rvSiteMapping.ServerReport.ReportServerUrl = new Uri(reportsUrl); // Add the Reporting Server URL
                    rvSiteMapping.ServerReport.ReportPath = String.Format("/{0}/{1}", reportsFolder, Request["ReportName"].ToString());

                    rvSiteMapping.ServerReport.Refresh();
                }
                catch (Exception ex)
                {
                    
                }
            }
        }
    }

    public class CustomReportCredentials : IReportServerCredentials
    {
        private string _UserName;
        private string _PassWord;
        private string _DomainName;

        public CustomReportCredentials(string UserName, string PassWord, string DomainName)
        {
            _UserName = UserName;
            _PassWord = PassWord;
            _DomainName = DomainName;
        }

        public System.Security.Principal.WindowsIdentity ImpersonationUser
        {
            get { return null; }
        }

        public ICredentials NetworkCredentials
        {
            get { return new NetworkCredential(_UserName, _PassWord, _DomainName); }
        }

        public bool GetFormsCredentials(out Cookie authCookie, out string user,
         out string password, out string authority)
        {
            authCookie = null;
            user = password = authority = null;
            return false;
        }
    }
}