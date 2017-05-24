using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using Telerik.Reporting;

namespace iOps.Website.Models
{
    [Description("A collection of my reports")]
    public class MyReportBook : Telerik.Reporting.ReportBook
    {
        public MyReportBook()
        {
            string reportsDirectory = AppDomain.CurrentDomain.BaseDirectory +@"\Reports\";
            TrdxClassHelper helper = new TrdxClassHelper();
            Report one = helper.GetReportFromTrdxFile(reportsDirectory + "MCTalarmreport.trdx");
            this.Reports.Add(one);
            Report two = helper.GetReportFromTrdxFile(reportsDirectory + "MCTwarningreport.trdx");
            this.Reports.Add(two);
            Report three = helper.GetReportFromTrdxFile(reportsDirectory + "MCTAircraftDockedTime.trdx");
            this.Reports.Add(three);
            Report four = helper.GetReportFromTrdxFile(reportsDirectory + "MCTAircraftUnDockedTime.trdx");
            this.Reports.Add(four);
            Report five = helper.GetReportFromTrdxFile(reportsDirectory + "MCTAircraft Docked.trdx");
            this.Reports.Add(five);
            Report six = helper.GetReportFromTrdxFile(reportsDirectory + "MCTNetworkMonitoring.trdx");
            this.Reports.Add(six);
        }
    }
}