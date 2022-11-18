import React, { Component } from 'react';
import './dashboard.css';
import SideLogo from '../../Assets/sidelogo.svg';
import HugeIcon from '../../Assets/hugeicon.svg';
import DashboardIcon from '../../Assets/dashboardicon.svg';
import Computer from '../../Assets/computer.svg';
import Pills from '../../Assets/pills.svg';
import Testtube from '../../Assets/testtube.svg';
import Grid from '../../Assets/grid.svg';
import Charts from '../../Assets/charts.svg';
import LandingPage from '../LandingPage/landingPage';

class Dashboard extends Component {
  
  render() {
   return(   
    <div>
      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills sidebar-background" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link" 
            id="v-pills-home-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-home" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-home" 
            aria-selected="true">
            <div className="sidelogo-imgcontent">
              <img className="sidelogo-img" src={SideLogo} alt="sidelogo" />
            </div>
          </button>
          <button class="nav-link" 
            id="v-pills-profile-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-profile" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-profile" 
            aria-selected="false">
            <div className="hugeicon-imgcontent">
              <img src={HugeIcon} alt="hugeIcon" />
            </div>
          </button>
          <button class="nav-link active" 
            id="v-pills-messages-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-messages" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-messages" 
            aria-selected="false">
            <img className="sidebaricon-imgcontent" src={DashboardIcon} alt="dashboardIcon" />
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-settings" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
            <img className="sidebaricon-imgcontent" src={Computer} alt="dashboardIcon" />
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-testtube" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
            <img className="sidebaricon-imgcontent" src={Pills} alt="dashboardIcon" />
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-grid" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
            <img className="sidebaricon-imgcontent" src={Testtube} alt="dashboardIcon" />
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-charts" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
            <img className="sidebaricon-imgcontent" src={Grid} alt="dashboardIcon" />
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-computer" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
            <img className="sidebaricon-imgcontent" src={Charts} alt="dashboardIcon" />
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade" 
            id="v-pills-home" 
            role="tabpanel" 
            aria-labelledby="v-pills-home-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade" 
            id="v-pills-profile" 
            role="tabpanel" 
            aria-labelledby="v-pills-profile-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade show active"
            id="v-pills-messages" 
            role="tabpanel" 
            aria-labelledby="v-pills-messages-tab" 
            tabindex="0">
              <LandingPage />
          </div>
          <div class="tab-pane fade" 
            id="v-pills-settings" 
            role="tabpanel" 
            aria-labelledby="v-pills-settings-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade"   
            id="v-pills-settings" 
            role="tabpanel" 
            aria-labelledby="v-pills-testube-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade" 
            id="v-pills-settings" 
            role="tabpanel" 
            aria-labelledby="v-pills-grid-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade" 
            id="v-pills-settings" 
            role="tabpanel" 
            aria-labelledby="v-pills-charts-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade" 
            id="v-pills-settings" 
            role="tabpanel" 
            aria-labelledby="v-pills-computer-tab" 
            tabindex="0">
          </div>
        </div>
      </div>
    </div>   
   );
  }
}
export default Dashboard;