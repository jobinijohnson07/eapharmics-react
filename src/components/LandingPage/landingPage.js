import React from "react";
import './landingPage.css';
import Lock from '../../Assets/lock.svg';
import Logout from '../../Assets/logout.svg';
import Location from '../../Assets/location.svg';
import Loginstudies from '../../Assets/loginstudies.svg';
import Log from '../../Assets/log.svg';
import Data from '../../Assets/data.svg';
import Access from '../../Assets/access.svg';
import Print from '../../Assets/print.svg';
import Stability from '../../Assets/stability.svg';
import System from '../../Assets/system.svg';
import EapharmicsIcon from '../../Assets/eapharmicsicon.svg';

function LandingPage() {
   return(
    <div className="sidebar-wholesection">
      <div className="sidebar-section">
        <div className="user-content">Hi Andrew, Welcome back!</div> 
        <div className="row">
          <div className="col-8">
            <div className="sidebarlogin-content">Last login at 11:45 a.m on 09/09/2022</div>
          </div>
          <div className="col-4 display">
            <div className="lock-content"><img className="lock-imgcontent" src={Lock} alt="lock" />Lock</div>
            <div className="logout-content"><img className="logout-imgcontent" src={Logout} alt="logout" />Log Out</div>            
          </div>
        </div>
        <div className="location-content"><img className="location-imgcontent"src={Location} alt="location" />144 Lunetta Street, Tampa, Florida 33614</div>
        <div className="row wholerow-cards">
          <div className="col p-0 firstrow-cards">
            <div className="card-wholecontent">
             <div className="sidebarsecondrow-section">
                <div className="cancellation-content">
                  <img  className="loginstudie-content" src={Loginstudies}  alt="loginstudies" />
                  <div className="mr-auto">
                    <p className="new-content">Login New Studies</p>
                    <p className="studybrief-content">Add New Study, Add Logs and <br/>Manage your studies at ease</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-0">
            <div className="card-wholecontent">
              <div className="sidebarsecondrow-section">
                <div className="cancellation-content">
                  <img  className="loginstudie-content" src={Log}  alt="log" />
                  <div className="mr-auto">
                    <p className="new-content">Log Manipulation</p>
                    <p className="studybrief-content">Setup log manipulation creteria and <br/>manage it for better performs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-0">
            <div className="card-wholecontent">
              <div className="sidebarsecondrow-section">
                <div className="cancellation-content">
                  <img  className="loginstudie-content" src={Data}  alt="data" />
                  <div className="mr-auto">
                    <p className="new-content">Data Entry Modules</p>
                    <p className="studybrief-content">Parameter selection to generate <br/>interactive stability evaluation graphs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row wholerow-cards">
          <div className="col p-0 firstrow-cards">
            <div className="card-wholecontent">
             <div className="sidebarsecondrow-section">
                <div className="cancellation-content">
                  <img  className="loginstudie-content" src={Access}  alt="access" />
                  <div className="mr-auto">
                    <p className="new-content">Data Access Evaluation</p>
                    <p className="studybrief-content">Setup your stability chamber and run <br/>your stability studies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-0">
            <div className="card-wholecontent">
              <div className="sidebarsecondrow-section">
                <div className="cancellation-content">
                  <img  className="loginstudie-content" src={Print}  alt="print" />
                  <div className="mr-auto">
                    <p className="new-content">Print</p>
                    <p className="studybrief-content">Customise and print your labels at <br/>ease</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-0">
            <div className="card-wholecontent">
              <div className="sidebarsecondrow-section">
                <div className="cancellation-content">
                  <img  className="loginstudie-content" src={Stability}  alt="stability" />
                  <div className="mr-auto">
                    <p className="new-content">Stability Maintenance</p>
                    <p className="studybrief-content">Setup your stability chamber and run <br/>your stability studies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row wholerow-cards">
          <div className="col p-0 firstrow-cards">
            <div className="card-wholecontent">
             <div className="sidebarsecondrow-section">
                <div className="cancellation-content">
                  <img  className="loginstudie-content" src={System}  alt="system" />
                  <div className="mr-auto">
                    <p className="new-content">System Maintenance</p>
                    <p className="studybrief-content">Setup your system, users and their permission in the software for quick and easy manitenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-0">
            <div className="card-wholecontent">
              <div className="sidebarsecondrow-section">
                <div className="cancellation-content">
                  <img  className="loginstudie-content" src={EapharmicsIcon}  alt="eapharmicsicon" />
                  <div className="mr-auto">
                    <p className="new-content">EAPharMiC’S Help</p>
                    <p className="studybrief-content">Setup your system, users and their permission in the software for quick and easy manitenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-0">
          </div>
        </div>
      </div>
    </div>
   );  
}
export default LandingPage;