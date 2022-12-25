using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ModalExample
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static bool GetNumberOfRecords()
        {
            //Here check the number of records in the table and then return true or false
            if(true)//It means the number of records are more than 0
            {
                return true;
            }
            else // It means number of records is 0
            {
                return false;
            }
            
        }
    }
}