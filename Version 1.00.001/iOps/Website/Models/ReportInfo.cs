﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace iOps.Website.Models
{
    public class ReportInfo
    {
        public int ReportId { get; set; }
        public string ReportName { get; set; }
        public string ReportURL { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string ReportSummary { get; set; }
    }

}