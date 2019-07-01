import React from 'react';

const Sidebar = () => (
  <div className="left side-menu">
    <div className="slimscroll-menu" id="remove-scroll">
      {/* <!--- Sidemenu --> */}
      <div id="sidebar-menu">
        {/* <!-- Left Menu Start --> */}
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title">Navigation</li>

          <li>
            <a href="index.html"
              ><i className="fi-air-play"></i
              ><span className="badge badge-pill badge-success float-right">1</span
              ><span>Dashboard</span></a
            >
          </li>

          {/* <li>
            <a href="javascript: void(0);"
              ><i className="fi-briefcase"></i><span>UI Kit</span>
              <span className="menu-arrow"></span
            ></a>
            <ul className="nav-second-level nav" aria-expanded="false">
              <li><a href="ui-typography.html">Typography</a></li>
              <li><a href="ui-cards.html">Cards</a></li>
              <li><a href="ui-buttons.html">Buttons</a></li>
              <li><a href="ui-modals.html">Modals</a></li>
              <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
              <li><a href="ui-tabs.html">Tabs</a></li>
              <li><a href="ui-progressbars.html">Progress Bars</a></li>
              <li><a href="ui-notifications.html">Notification</a></li>
              <li><a href="ui-carousel.html">Carousel</a></li>
              <li><a href="ui-video.html">Video</a></li>
              <li><a href="ui-tooltips-popovers.html">Tooltips & Popovers</a></li>
              <li><a href="ui-images.html">Images</a></li>
              <li><a href="ui-bootstrap.html">Bootstrap UI</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i className="fi-box"></i><span>Icons</span
              ><span className="menu-arrow"></span
            ></a>
            <ul className="nav-second-level nav" aria-expanded="false">
              <li><a href="icons-colored.html">Colored Icons</a></li>
              <li><a href="icons-materialdesign.html">Material Design</a></li>
              <li><a href="icons-dripicons.html">Dripicons</a></li>
              <li><a href="icons-fontawesome.html">Font awesome</a></li>
              <li><a href="icons-feather.html">Feather Icons</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i className="fi-bar-graph-2"></i><span>Graphs</span
              ><span className="menu-arrow"></span
            ></a>
            <ul className="nav-second-level nav" aria-expanded="false">
              <li><a href="chart-flot.html">Flot Chart</a></li>
              <li><a href="chart-morris.html">Morris Chart</a></li>
              <li><a href="chart-google.html">Google Chart</a></li>
              <li><a href="chart-chartist.html">Chartist Charts</a></li>
              <li><a href="chart-chartjs.html">Chartjs Chart</a></li>
              <li><a href="chart-c3.html">C3 Chart</a></li>
              <li><a href="chart-sparkline.html">Sparkline Chart</a></li>
              <li><a href="chart-knob.html">Jquery Knob</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i className="fi-disc"></i
              ><span className="badge badge-pill badge-primary float-right">9</span
              ><span>Forms</span></a
            >
            <ul className="nav-second-level nav" aria-expanded="false">
              <li><a href="form-elements.html">Form Elements</a></li>
              <li><a href="form-advanced.html">Form Advanced</a></li>
              <li><a href="form-validation.html">Form Validation</a></li>
              <li><a href="form-pickers.html">Form Pickers</a></li>
              <li><a href="form-wizard.html">Form Wizard</a></li>
              <li><a href="form-mask.html">Form Masks</a></li>
              <li><a href="form-summernote.html">Summernote</a></li>
              <li><a href="form-wysiwig.html">Wysiwig Editors</a></li>
              <li><a href="form-uploads.html">Multiple File Upload</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i className="fi-layout"></i><span>Tables</span
              ><span className="menu-arrow"></span
            ></a>
            <ul className="nav-second-level nav" aria-expanded="false">
              <li><a href="tables-basic.html">Basic Tables</a></li>
              <li><a href="tables-layouts.html">Tables Layouts</a></li>
              <li><a href="tables-datatable.html">Data Table</a></li>
              <li><a href="tables-responsive.html">Responsive Table</a></li>
              <li><a href="tables-tablesaw.html">Tablesaw Table</a></li>
              <li><a href="tables-editable.html">Editable Table</a></li>
            </ul>
          </li>

          <li className="menu-title">More</li>

          <li>
            <a href="javascript: void(0);"
              ><i className="fi-target"></i><span>Admin UI</span
              ><span className="menu-arrow"></span
            ></a>
            <ul className="nav-second-level nav" aria-expanded="false">
              <li><a href="admin-grid.html">Grid</a></li>
              <li><a href="admin-sweet-alert.html">Sweet Alert</a></li>
              <li><a href="admin-widgets.html">Widgets</a></li>
              <li><a href="admin-nestable.html">Nestable List</a></li>
              <li><a href="admin-rangeslider.html">Range Slider</a></li>
              <li><a href="admin-ratings.html">Ratings</a></li>
            </ul>
          </li>

          <li>
            <a href="calendar.html"
              ><i className="fi-clock"></i><span>Calendar</span></a
            >
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i className="fi-map"></i><span>Maps</span
              ><span className="menu-arrow"></span
            ></a>
            <ul className="nav-second-level nav" aria-expanded="false">
              <li><a href="maps-google.html">Google Maps</a></li>
              <li><a href="maps-vector.html">Vector Maps</a></li>
              <li><a href="maps-mapael.html">Mapael Maps</a></li>
            </ul>
          </li>

          <li className="has_sub">
            <a href="javascript: void(0);"
              ><i className="fi-paper-stack"></i><span>Pages</span
              ><span className="menu-arrow"></span
            ></a>
            <ul className="nav-second-level nav" aria-expanded="false">
              <li><a href="page-starter.html">Starter Page</a></li>
              <li><a href="page-login.html">Login</a></li>
              <li><a href="page-register.html">Register</a></li>
              <li><a href="page-logout.html">Logout</a></li>
              <li><a href="page-recoverpw.html">Recover Password</a></li>
              <li><a href="page-lock-screen.html">Lock Screen</a></li>
              <li><a href="page-confirm-mail.html">Confirm Mail</a></li>
              <li><a href="page-404.html">Error 404</a></li>
              <li><a href="page-404-alt.html">Error 404-alt</a></li>
              <li><a href="page-500.html">Error 500</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i className="fi-marquee-plus"></i><span>Extra Pages</span
              ><span className="menu-arrow"></span
            ></a>
            <ul className="nav-second-level nav" aria-expanded="false">
              <li><a href="extras-about.html">About Us</a></li>
              <li><a href="extras-contact.html">Contact</a></li>
              <li><a href="extras-members.html">Members</a></li>
              <li><a href="extras-timeline.html">Timeline</a></li>
              <li><a href="extras-invoice.html">Invoice</a></li>
              <li><a href="extras-maintenance.html">Maintenance</a></li>
              <li><a href="extras-coming-soon.html">Coming Soon</a></li>
              <li><a href="extras-faq.html">FAQ</a></li>
              <li><a href="extras-pricing.html">Pricing</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);" aria-expanded="true"
              ><i className="fi-share"></i><span>Multi Level</span
              ><span className="menu-arrow"></span
            ></a>
            <ul className="nav-second-level nav" aria-expanded="true">
              <li><a href="javascript: void(0);">Level 1.1</a></li>
              <li>
                <a href="javascript: void(0);" aria-expanded="true"
                  >Level 1.2<span className="menu-arrow"></span
                ></a>
                <ul className="nav-third-level nav" aria-expanded="true">
                  <li><a href="javascript: void(0);">Level 2.1</a></li>
                  <li><a href="javascript: void(0);">Level 2.2</a></li>
                </ul>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
      {/* <!-- Sidebar --> */}
      <div className="clearfix"></div>
    </div>
    {/* <!-- Sidebar -left --> */}
  </div>
);

export default Sidebar;
