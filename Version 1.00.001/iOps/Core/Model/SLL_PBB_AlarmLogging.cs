//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace iOps.Core.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class SLL_PBB_AlarmLogging
    {
        public string AlarmID { get; set; }
        public string AlarmType { get; set; }
        public string AlarmGroup { get; set; }
        public Nullable<int> Priority { get; set; }
        public string AlarmText { get; set; }
        public Nullable<bool> Active { get; set; }
        public Nullable<bool> Acked { get; set; }
        public Nullable<int> TimeDelay { get; set; }
        public Nullable<double> AlarmValue { get; set; }
        public Nullable<double> ClearedValue { get; set; }
        public Nullable<double> AlarmLimit { get; set; }
        public Nullable<System.DateTime> AlarmDateTime { get; set; }
        public Nullable<System.DateTime> ClearedDateTime { get; set; }
        public Nullable<System.DateTime> AckedDateTime { get; set; }
        public string AckedUser { get; set; }
        public string Units { get; set; }
        public string Document { get; set; }
        public string Comment { get; set; }
        public string Terminal { get; set; }
        public string Zone { get; set; }
        public string Gate { get; set; }
        public string Tag { get; set; }
    }
}
