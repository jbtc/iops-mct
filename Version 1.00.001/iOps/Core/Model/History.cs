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
    
    public partial class History
    {
        public System.Guid ID { get; set; }
        public string ControlField { get; set; }
        public string Source { get; set; }
        public string Action { get; set; }
        public string Details { get; set; }
        public bool IsDeleted { get; set; }
        public bool ReadyForArchive { get; set; }
    }
}
