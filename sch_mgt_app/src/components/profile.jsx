const Profile = ()=> {
    return (
      <>
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="index.html"><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                    </li>
                    <li className="menu-title">Student</li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon ti-user"></i>Profile</a>
                        <ul className="sub-menu children dropdown-menu">                            
                          <li><i className="fa fa-puzzle-piece"></i><a href="ui-buttons.html">Buttons</a></li>
                          <li><i className="fa fa-id-badge"></i><a href="ui-badges.html">Badges</a></li>
                          <li><i className="fa fa-bars"></i><a href="ui-tabs.html">Tabs</a></li>

                          <li><i className="fa fa-id-card-o"></i><a href="ui-cards.html">Cards</a></li>
                          <li><i className="fa fa-exclamation-triangle"></i><a href="ui-alerts.html">Alerts</a></li>
                          <li><i className="fa fa-spinner"></i><a href="ui-progressbar.html">Progress Bars</a></li>
                          <li><i className="fa fa-fire"></i><a href="ui-modals.html">Modals</a></li>
                          <li><i className="fa fa-book"></i><a href="ui-switches.html">Switches</a></li>
                          <li><i className="fa fa-th"></i><a href="ui-grids.html">Grids</a></li>
                          <li><i className="fa fa-file-word-o"></i><a href="ui-typgraphy.html">Typography</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Utilities</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="fa fa-calendar"></i><a href="tables-basic.html">Academic Calender</a></li>
                            <li><i className="fa fa-calendar-o"></i><a href="tables-data.html">Todo</a></li>
                            <li><i className="ti-panel"></i><a href="tables-data.html">Calculator</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-money"></i>Account</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                            <li><i className="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                        </ul>
                    </li>

                    <li className="menu-title">Courses</li>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-plus"></i>Mathematics</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-fort-awesome"></i><a href="font-fontawesome.html">Font Awesome</a></li>
                            <li><i className="menu-icon ti-themify-logo"></i><a href="font-themify.html">Themefy Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="widgets.html"> <i className="menu-icon ti-email"></i>Integrated Science </a>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>English Language</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-line-chart"></i><a href="charts-chartjs.html">Chart JS</a></li>
                            <li><i className="menu-icon fa fa-area-chart"></i><a href="charts-flot.html">Flot Chart</a></li>
                            <li><i className="menu-icon fa fa-pie-chart"></i><a href="charts-peity.html">Peity Chart</a></li>
                        </ul>
                    </li>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>Social Studies</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                            <li><i className="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                        </ul>
                    </li>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>R.M.E.</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                            <li><i className="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                        </ul>
                    </li>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>Ghanaian Language</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                            <li><i className="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                        </ul>
                    </li>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>B.D.T.</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                            <li><i className="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                        </ul>
                    </li>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>French</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                            <li><i className="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                        </ul>
                    </li>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>I.C.T.</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                            <li><i className="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                        </ul>
                    </li>

                    <li className="menu-title">Settings</li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-user"></i>User</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-sign-out"></i><a href="page-login.html">Logout</a></li>
                            <li><i className="menu-icon fa fa-sign-in"></i><a href="page-register.html">Register</a></li>
                            <li><i className="menu-icon fa fa-sign-in"></i><a href="page-register.html">Update Profile</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-lock"></i>Password</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-paper-plane"></i><a href="pages-forget.html">Forgot Password</a></li>
                            <li><i className="menu-icon fa fa-paper-plane"></i><a href="pages-forget.html">Update Password</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
      </aside>


      <div id="right-panel" className="right-panel">
      <header id="header" className="header">
            <div className="top-left">
                <div className="navbar-header">
                    <a className="navbar-brand" href="./"><img src="images/logo.png" alt="Logo"/></a>
                    <a className="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo"/></a>
                    <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a>
                </div>
            </div>
            <div className="top-right">
                <div className="header-menu">
                    <div className="header-left">
                        <button className="search-trigger"><i className="fa fa-search"></i></button>
                        <div className="form-inline">
                            <form className="search-form">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search"/>
                                <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                            </form>
                        </div>

                        <div className="dropdown for-notification">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-bell"></i>
                                <span className="count bg-danger">3</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="notification">
                                <p className="red">You have 3 Notification</p>
                                <a className="dropdown-item media" href="#">
                                    <i className="fa fa-check"></i>
                                    <p>Server #1 overloaded.</p>
                                </a>
                                <a className="dropdown-item media" href="#">
                                    <i className="fa fa-info"></i>
                                    <p>Server #2 overloaded.</p>
                                </a>
                                <a className="dropdown-item media" href="#">
                                    <i className="fa fa-warning"></i>
                                    <p>Server #3 overloaded.</p>
                                </a>
                            </div>
                        </div>

                        <div className="dropdown for-message">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="message" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-envelope"></i>
                                <span className="count bg-primary">4</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="message">
                                <p className="red">You have 4 Mails</p>
                                <a className="dropdown-item media" href="#">
                                    <span className="photo media-left"><img alt="avatar" src="images/avatar/1.jpg"/></span>
                                    <div className="message media-body">
                                        <span className="name float-left">Jonathan Smith</span>
                                        <span className="time float-right">Just now</span>
                                        <p>Hello, this is an example msg</p>
                                    </div>
                                </a>
                                <a className="dropdown-item media" href="#">
                                    <span className="photo media-left"><img alt="avatar" src="images/avatar/2.jpg"/></span>
                                    <div className="message media-body">
                                        <span className="name float-left">Jack Sanders</span>
                                        <span className="time float-right">5 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </a>
                                <a className="dropdown-item media" href="#">
                                    <span className="photo media-left"><img alt="avatar" src="images/avatar/3.jpg"/></span>
                                    <div className="message media-body">
                                        <span className="name float-left">Cheryl Wheeler</span>
                                        <span className="time float-right">10 minutes ago</span>
                                        <p>Hello, this is an example msg</p>
                                    </div>
                                </a>
                                <a className="dropdown-item media" href="#">
                                    <span className="photo media-left"><img alt="avatar" src="images/avatar/4.jpg"/></span>
                                    <div className="message media-body">
                                        <span className="name float-left">Rachel Santos</span>
                                        <span className="time float-right">15 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="user-area dropdown float-right">
                        <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar"/>
                        </a>

                        <div className="user-menu dropdown-menu">
                            <a className="nav-link" href="/profile"><i className="fa fa- user"></i>My Profile</a>

                            <a className="nav-link" href="#"><i className="fa fa- user"></i>Notifications <span className="count">13</span></a>

                            <a className="nav-link" data-toggle="tab" href="#custom-nav-contact" role="tab" aria-controls="custom-nav-contact" aria-selected="false"><i className="fa fa -cog"></i>Settings</a>

                            <a className="nav-link" href="/logout"><i className="fa fa-power -off"></i>Logout</a>
                        </div>
                    </div>

                </div>
            </div>
        </header>

        <main >
          {/* <div class="breadcrumbs">
              <div class="breadcrumbs-inner">
                  <div class="row m-0">
                      <div class="col-sm-4">
                          <div class="page-header float-left">
                              <div class="page-title">
                                  <h1>Profile</h1>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-8">
                          <div class="page-header float-right">
                              <div class="page-title">
                                  <ol class="breadcrumb text-right">
                                      <li><a href="#">Dashboard</a></li>
                                      <li><a href="#">UI Elements</a></li>
                                      <li class="active">Cards</li>
                                  </ol>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div> */}

          <div className="content" >
            <div className="animated fadeIn">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                      <div className="card-header">
                          <i className="fa fa-user"></i><strong className="card-title pl-2">Profile Card</strong>
                      </div>
                      <div className="card-body">
                          <div className="mx-auto d-block">
                              <img className="rounded-circle mx-auto d-block" src="images/admin.jpg" alt="Card image cap"/>
                              <h5 className="text-sm-center mt-2 mb-1">Edwin Anyetei Adjei</h5>
                              <div className="location text-sm-center"><i className="fa fa-map-marker"></i> Accra, Ghana</div>
                              <div className="location text-sm-center"><i className="fa fa-certificate"></i>Senior Boys Prefect</div>
                          </div>
                          <hr/>
                          <div className="card-text text-sm-center">
                              <a href="#"><i className="fa fa-facebook pr-1"></i></a>
                              <a href="#"><i className="fa fa-twitter pr-1"></i></a>
                              <a href="#"><i className="fa fa-linkedin pr-1"></i></a>
                              <a href="#"><i className="fa fa-pinterest pr-1"></i></a>
                          </div>
                      </div>
                  </div>
                </div>


                <div class="col-lg-8">
                  <div class="card">
                    <div class="card-body">
                        <div class="custom-tab">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="custom-nav-home-tab" data-toggle="tab" href="#custom-nav-home" role="tab" aria-controls="custom-nav-home" aria-selected="true">Payment details</a>
                                    <a class="nav-item nav-link" id="custom-nav-profile-tab" data-toggle="tab" href="#custom-nav-profile" role="tab" aria-controls="custom-nav-profile" aria-selected="false">Profile</a>
                                    <a class="nav-item nav-link" id="custom-nav-contact-tab" data-toggle="tab" href="#custom-nav-contact" role="tab" aria-controls="custom-nav-contact" aria-selected="false">Settings</a>
                                </div>
                            </nav>
                            <div class="tab-content pl-3 pt-2" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="custom-nav-home" role="tabpanel" aria-labelledby="custom-nav-home-tab">
                                  <div class="card">
                                      <div class="card-header">
                                        <center>
                                          <strong class="card-title">Payemnt History</strong>
                                        </center>
                                      </div>
                                      <div class="table-stats order-table ov-h">
                                          <table class="table ">
                                              <thead>
                                                  <tr>
                                                      <th class="serial">#</th>
                                                      <th>ID</th>
                                                      <th>Date</th>
                                                      <th>Amount Paid</th>
                                                      <th>Balance</th>
                                                      <th>Total Fees</th>
                                                      <th>Status</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td class="serial">1.</td>
                                                      <td> #5469 </td>
                                                      <td> 12th August 2022 12:00pm</td>
                                                      <td>  <span class="name">250</span> </td>
                                                      <td> <span class="product">250</span> </td>
                                                      <td><span class="count">500</span></td>
                                                      <td>
                                                          <span class="badge badge-danger">Pending</span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="serial">1.</td>
                                                      <td> #4433 </td>
                                                      <td> 21st September 2022 1:00pm</td>
                                                      <td>  <span class="name">100</span> </td>
                                                      <td> <span class="product">150</span> </td>
                                                      <td><span class="count">500</span></td>
                                                      <td>
                                                          <span class="badge badge-warning">Pending</span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="serial">1.</td>
                                                      <td> #3256 </td>
                                                      <td> 30th September 2022 10:00am</td>
                                                      <td>  <span class="name">100</span> </td>
                                                      <td> <span class="product">50</span> </td>
                                                      <td><span class="count">500</span></td>
                                                      <td>
                                                          <span class="badge badge-warning">Pending</span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="serial">1.</td>
                                                      <td> #5665 </td>
                                                      <td> 13th November 2022 8:00am</td>
                                                      <td>  <span class="name">50</span> </td>
                                                      <td> <span class="product">0</span> </td>
                                                      <td><span class="count">500</span></td>
                                                      <td>
                                                          <span class="badge badge-success">Complete</span>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div> 
                                  </div>
                                    
                                </div>
                                <div class="tab-pane fade" id="custom-nav-profile" role="tabpanel" aria-labelledby="custom-nav-profile-tab">
                                  <div class="card">
                                    <div class="card-body card-block">
                                        <form action="#" method="post" enctype="multipart/form-data" class="form-horizontal">
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Status</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static"><strong>Student</strong></p>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Username</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static"><strong>Eddyz</strong></p>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">First name</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static"><strong>Edwin</strong></p>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Middle name</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static"><strong>Anyetei</strong></p>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Last Name</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static"><strong>Adjei</strong></p>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Email</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static"><strong>edwinadjei381@gmail.com</strong></p>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Date of Birth</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static"><strong>20th December 1995</strong></p>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Gender</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static"><strong>Male</strong></p>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Class</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static"><strong>JHS 3</strong></p>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Age</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static"><strong>27 years</strong></p>
                                                </div>
                                            </div>
                                            {/* <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Username</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static">Edwin</p>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Username</label></div>
                                                <div class="col-12 col-md-9">
                                                    <p class="form-control-static">Edwin</p>
                                                </div>
                                            </div> */}
                                        </form>
                                    </div>
                                    {/* <div class="card-footer">
                                        <button type="submit" class="btn btn-primary btn-sm">
                                            <i class="fa fa-dot-circle-o"></i> Submit
                                        </button>
                                        <button type="reset" class="btn btn-danger btn-sm">
                                            <i class="fa fa-ban"></i> Reset
                                        </button>
                                    </div> */}
                                  </div>
                                </div>
                                <div class="tab-pane fade" id="custom-nav-contact" role="tabpanel" aria-labelledby="custom-nav-contact-tab">
                                  <div class="card">
                                    <div class="card-header">
                                        <strong>Update Profile</strong>
                                    </div>
                                    <div class="card-body card-block">
                                        <form action="#" method="post" enctype="multipart/form-data" class="form-horizontal">
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">First name</label></div>
                                                <div class="col-12 col-md-9"><input type="text" id="text-input" name="text-input" placeholder="Enter your first name" class="form-control"/></div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label for="email-input" class=" form-control-label">Middle name</label></div>
                                                <div class="col-12 col-md-9"><input type="email" id="email-input" name="email-input" placeholder="Enter your middle name" class="form-control"/><small class="help-block form-text text-muted">*Optional</small></div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label for="password-input" class=" form-control-label">Last name</label></div>
                                              <div class="col-12 col-md-9"><input type="text" id="password-input" name="password-input" placeholder="Enter your last name" class="form-control"/></div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label for="password-input" class=" form-control-label">Email</label></div>
                                              <div class="col-12 col-md-9"><input type="email" id="password-input" name="password-input" placeholder="Enter your email" class="form-control"/></div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Gender</label></div>
                                                <div class="col col-md-9">
                                                    <div class="form-check-inline form-check">
                                                        <label for="inline-radio1" class="form-check-label">
                                                            <input type="radio" id="inline-radio1" name="inline-radios" value="option1" class="form-check-input"/>Male
                                                        </label>
                                                        <label for="inline-radio3" class="form-check-label pl-2">
                                                            <input type="radio" id="inline-radio3" name="inline-radios" value="option3" class="form-check-input"/>Female
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label for="password-input" class=" form-control-label">Date of birth</label></div>
                                              <div class="col-12 col-md-9"><input type="date" id="password-input" name="password-input" placeholder="Enter your email" class="form-control"/></div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Status</label></div>
                                                <div class="col col-md-9">
                                                    <div class="form-check-inline form-check">
                                                        <label for="inline-radio1" class="form-check-label ">
                                                            <input type="radio" id="inline-radio1" name="inline-radios" value="option1" class="form-check-input"/>Admin
                                                        </label>
                                                        <label for="inline-radio2" class="form-check-label ml-3">
                                                            <input type="radio" id="inline-radio2" name="inline-radios" value="option2" class="form-check-input"/>Faculty
                                                        </label>
                                                        <label for="inline-radio3" class="form-check-label ml-3">
                                                            <input type="radio" id="inline-radio3" name="inline-radios" value="option3" class="form-check-input"/>Student
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label for="select" class=" form-control-label">Select</label></div>
                                                <div class="col-12 col-md-9">
                                                    <select name="select" id="select" class="form-control">
                                                        <option value="0">Which class are you?</option>
                                                        <option value="1">JHS 1</option>
                                                        <option value="2">JHS 2</option>
                                                        <option value="3">JHS 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label for="file-input" class=" form-control-label">Select profile photo</label></div>
                                                <div class="col-12 col-md-9"><input type="file" id="file-input" name="file-input" class="form-control-file"/></div>
                                            </div>
                                            {/* <div class="row form-group">
                                                <div class="col col-md-3"><label for="selectLg" class=" form-control-label">Select Large</label></div>
                                                <div class="col-12 col-md-9">
                                                    <select name="selectLg" id="selectLg" class="form-control-lg form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="1">Option #1</option>
                                                        <option value="2">Option #2</option>
                                                        <option value="3">Option #3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label for="selectSm" class=" form-control-label">Select Small</label></div>
                                                <div class="col-12 col-md-9">
                                                    <select name="selectSm" id="selectSm" class="form-control-sm form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="1">Option #1</option>
                                                        <option value="2">Option #2</option>
                                                        <option value="3">Option #3</option>
                                                        <option value="4">Option #4</option>
                                                        <option value="5">Option #5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label for="disabledSelect" class=" form-control-label">Disabled Select</label></div>
                                                <div class="col-12 col-md-9">
                                                    <select name="disabledSelect" id="disabledSelect" disabled="" class="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="1">Option #1</option>
                                                        <option value="2">Option #2</option>
                                                        <option value="3">Option #3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label for="multiple-select" class=" form-control-label">Multiple select</label></div>
                                                <div class="col col-md-9">
                                                    <select name="multiple-select" id="multiple-select" multiple="" class="form-control">
                                                        <option value="1">Option #1</option>
                                                        <option value="2">Option #2</option>
                                                        <option value="3">Option #3</option>
                                                        <option value="4">Option #4</option>
                                                        <option value="5">Option #5</option>
                                                        <option value="6">Option #6</option>
                                                        <option value="7">Option #7</option>
                                                        <option value="8">Option #8</option>
                                                        <option value="9">Option #9</option>
                                                        <option value="10">Option #10</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Radios</label></div>
                                                <div class="col col-md-9">
                                                    <div class="form-check">
                                                        <div class="radio">
                                                            <label for="radio1" class="form-check-label ">
                                                                <input type="radio" id="radio1" name="radios" value="option1" class="form-check-input"/>Option 1
                                                            </label>
                                                        </div>
                                                        <div class="radio">
                                                            <label for="radio2" class="form-check-label ">
                                                                <input type="radio" id="radio2" name="radios" value="option2" class="form-check-input"/>Option 2
                                                            </label>
                                                        </div>
                                                        <div class="radio">
                                                            <label for="radio3" class="form-check-label ">
                                                                <input type="radio" id="radio3" name="radios" value="option3" class="form-check-input"/>Option 3
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Checkboxes</label></div>
                                                <div class="col col-md-9">
                                                    <div class="form-check">
                                                        <div class="checkbox">
                                                            <label for="checkbox1" class="form-check-label ">
                                                                <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" class="form-check-input"/>Option 1
                                                            </label>
                                                        </div>
                                                        <div class="checkbox">
                                                            <label for="checkbox2" class="form-check-label ">
                                                                <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" class="form-check-input"/> Option 2
                                                            </label>
                                                        </div>
                                                        <div class="checkbox">
                                                            <label for="checkbox3" class="form-check-label ">
                                                                <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" class="form-check-input"/> Option 3
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3"><label class=" form-control-label">Inline Checkboxes</label></div>
                                                <div class="col col-md-9">
                                                    <div class="form-check-inline form-check">
                                                        <label for="inline-checkbox1" class="form-check-label ">
                                                            <input type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" class="form-check-input"/>One
                                                        </label>
                                                        <label for="inline-checkbox2" class="form-check-label ">
                                                            <input type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2" class="form-check-input"/>Two
                                                        </label>
                                                        <label for="inline-checkbox3" class="form-check-label ">
                                                            <input type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3" class="form-check-input"/>Three
                                                        </label>
                                                    </div>
                                                </div>
                                            </div> */}
                                            
                                        </form>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary btn-sm">
                                            <i class="fa fa-dot-circle-o"></i> Submit
                                        </button>
                                        <button type="reset" class="btn btn-danger btn-sm">
                                            <i class="fa fa-ban"></i> Reset
                                        </button>
                                    </div>
                                  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </>
    );
}
  
export default Profile;