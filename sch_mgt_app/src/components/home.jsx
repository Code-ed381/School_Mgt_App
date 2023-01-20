import { Outlet, Link } from "react-router-dom";
import Axios from "axios";
import { Children } from "react";

function Home(props) {
  // if (!user) {
  //   console.log(user)
  //   return <Navigate to='/landing' replace/>
  // }
  const logout = async (e)=>  {
    e.preventDefault()

    Axios.get('http://localhost:3001/logout')
    .then((res)=>{
        // setMessage(res.data.message)
        window.localStorage.setItem('user', 'logged_out') 
        window.location = '/login'
        // setUser(null) 
    })
}

  return (
    <>
        {/* <!-- ============================================================== -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- ============================================================== -->` */}
        {/* <div classNameName="preloader">
            <div className="loader">
                <div className="loader__figure"></div>
                <p className="loader__label">Elite admin</p>
            </div>
        </div> */}
        {/* <!-- ============================================================== -->
        <!-- Main wrapper - style you can find in pages.scss -->
        <!-- ============================================================== --> */}
        <div id="main-wrapper">
            {/* <!-- ============================================================== -->
            <!-- Topbar header - style you can find in pages.scss -->
            <!-- ============================================================== --> */}
            <header className="topbar">
                <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                    {/* <!-- ============================================================== -->
                    <!-- Logo -->
                    <!-- ============================================================== --> */}
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">
                            <b>
                                 <i className="wi wi-sunset"></i>
                                {/* <!-- Dark Logo icon --> */}
                                <img src="" alt="" srcset="" />
                                <img src="./assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                                {/* <!-- Light Logo icon --> */}
                                <img src="./assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                            </b>
                            {/* <!--End Logo icon --> */}
                            <span className="hidden-xs"><span className="font-bold">elite</span>university</span>
                        </a>
                    </div>
                    {/* <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== --> */}
                    <div className="navbar-collapse">
                        {/* <!-- ============================================================== -->
                        <!-- toggle and nav items -->
                        <!-- ============================================================== --> */}
                        <ul className="navbar-nav me-auto">
                            {/* <!-- This is  --> */}
                            <li className="nav-item"> <a className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu"></i></a> </li>
                            <li className="nav-item"> <a className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" href="javascript:void(0)"><i className="icon-menu"></i></a> </li>
                            {/* <!-- ============================================================== -->
                            <!-- Search -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item">
                                <form className="app-search d-none d-md-block d-lg-block">
                                    <input type="text" className="form-control" placeholder="Search & enter" />
                                </form>
                            </li>
                        </ul>
                        {/* <!-- ============================================================== -->
                        <!-- User profile and search -->
                        <!-- ============================================================== --> */}
                        <ul className="navbar-nav my-lg-0">
                            {/* <!-- ============================================================== -->
                            <!-- Comment -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="ti-email"></i>
                                    <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end mailbox animated bounceInDown">
                                    <ul>
                                        <li>
                                            <div className="drop-title">Notifications</div>
                                        </li>
                                        <li>
                                            <div className="message-center">
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)">
                                                    <div className="btn btn-danger btn-circle text-white"><i className="fa fa-link"></i></div>
                                                    <div className="mail-contnet">
                                                        <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)">
                                                    <div className="btn btn-success btn-circle text-white"><i className="ti-calendar"></i></div>
                                                    <div className="mail-contnet">
                                                        <h5>Event today</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)">
                                                    <div className="btn btn-info btn-circle text-white"><i className="ti-settings"></i></div>
                                                    <div className="mail-contnet">
                                                        <h5>Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)">
                                                    <div className="btn btn-primary btn-circle"><i className="ti-user"></i></div>
                                                    <div className="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="nav-link text-center link" href="javascript:void(0);"> <strong>Check all notifications</strong> <i className="fa fa-angle-right"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- End Comment -->
                            <!-- ============================================================== -->
                            <!-- ============================================================== -->
                            <!-- Messages -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" id="2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="icon-note"></i>
                                    <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                                </a>
                                <div className="dropdown-menu mailbox dropdown-menu-end animated bounceInDown" aria-labelledby="2">
                                    <ul>
                                        <li>
                                            <div className="drop-title">You have 4 new messages</div>
                                        </li>
                                        <li>
                                            <div className="message-center">
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)">
                                                    <div className="user-img"> <img src="../assets/images/users/1.jpg" alt="user" className="img-circle"/> <span className="profile-status online pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)">
                                                    <div className="user-img"> <img src="../assets/images/users/2.jpg" alt="user" className="img-circle"/> <span className="profile-status busy pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)">
                                                    <div className="user-img"> <img src="../assets/images/users/3.jpg" alt="user" className="img-circle"/> <span className="profile-status away pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)">
                                                    <div className="user-img"> <img src="../assets/images/users/4.jpg" alt="user" className="img-circle"/> <span className="profile-status offline pull-right"></span> </div>
                                                    <div className="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="nav-link text-center link" href="javascript:void(0);"> <strong>See all e-Mails</strong> <i className="fa fa-angle-right"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- End Messages -->
                            <!-- ============================================================== -->
                            <!-- ============================================================== -->
                            <!-- mega menu -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-layout-width-default"></i></a>
                                <div className="dropdown-menu animated bounceInDown">
                                    <ul className="mega-dropdown-menu row">
                                        <li className="col-lg-3 col-xlg-2 m-b-30">
                                            <h4 className="m-b-20">CAROUSEL</h4>
                                            {/* <!-- CAROUSEL --> */}
                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                <div className="carousel-inner" role="listbox">
                                                    <div className="carousel-item active">
                                                        <div className="container"> <img className="d-block img-fluid" src="../assets/images/big/img1.jpg" alt="First slide"/></div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="container"><img className="d-block img-fluid" src="../assets/images/big/img2.jpg" alt="Second slide"/></div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="container"><img className="d-block img-fluid" src="../assets/images/big/img3.jpg" alt="Third slide"/></div>
                                                    </div>
                                                </div>
                                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a>
                                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
                                            </div>
                                            {/* <!-- End CAROUSEL --> */}
                                        </li>
                                        <li className="col-lg-3 m-b-30">
                                            <h4 className="m-b-20">ACCORDION</h4>
                                            {/* <!-- Accordian --> */}
                                            <div className="accordion" id="accordionExample">
                                                <div className="card m-b-0">
                                                    <div className="card-header bg-white p-0" id="headingOne">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Collapsible Group Item #1
                                                            </button>
                                                        </h5>
                                                    </div>

                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card m-b-0">
                                                    <div className="card-header bg-white p-0" id="headingTwo">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                                                aria-controls="collapseTwo">
                                                                Collapsible Group Item #2
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card m-b-0">
                                                    <div className="card-header bg-white p-0" id="headingThree">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                                                aria-controls="collapseThree">
                                                                Collapsible Group Item #3
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-3  m-b-30">
                                            <h4 className="m-b-20">CONTACT US</h4>
                                            {/* <!-- Contact --> */}
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter Name"/> </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Enter email"/> </div>
                                                <div className="form-group">
                                                    <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-info text-white">Submit</button>
                                            </form>
                                        </li>
                                        <li className="col-lg-3 col-xlg-4 m-b-30">
                                            <h4 className="m-b-20">List style</h4>
                                            {/* <!-- List style --> */}
                                            <ul className="list-style-none">
                                                <li><a href="javascript:void(0)"><i className="fa fa-check text-success"></i> You can give link</a></li>
                                                <li><a href="javascript:void(0)"><i className="fa fa-check text-success"></i> Give link</a></li>
                                                <li><a href="javascript:void(0)"><i className="fa fa-check text-success"></i> Another Give link</a></li>
                                                <li><a href="javascript:void(0)"><i className="fa fa-check text-success"></i> Forth link</a></li>
                                                <li><a href="javascript:void(0)"><i className="fa fa-check text-success"></i> Another fifth link</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- End mega menu -->
                            <!-- ============================================================== -->
                            <!-- ============================================================== -->
                            <!-- User Profile -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item dropdown u-pro">
                                <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user" className=""/> <span className="hidden-md-down">Mark &nbsp;<i className="fa fa-angle-down"></i></span> </a>
                                <div className="dropdown-menu dropdown-menu-end animated flipInY">
                                    {/* <!-- text--> */}
                                    <Link to="profile" className="dropdown-item"><i className="ti-user"></i> My Profile</Link>
                                    {/* <!-- text--> */}
                                    <a href="javascript:void(0)" className="dropdown-item"><i className="ti-wallet"></i> My Balance</a>
                                    {/* <!-- text--> */}
                                    <a href="javascript:void(0)" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                                    {/* <!-- text--> */}
                                    <div className="dropdown-divider"></div>
                                    {/* <!-- text--> */}
                                    <a href="javascript:void(0)" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>
                                    {/* <!-- text--> */}
                                    <div className="dropdown-divider"></div>
                                    {/* <!-- text--> */}
                                    <a href="#" onClick={logout} className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                                    {/* <!-- text--> */}
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- End User Profile -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item right-side-toggle"> <a className="nav-link  waves-effect waves-light" href="javascript:void(0)"><i className="ti-settings"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            {/* <!-- ============================================================== -->
            <!-- End Topbar header --> */}
            {/* <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Left Sidebar - style you can find in sidebar.scss  -->
            <!-- ============================================================== --> */}
            <aside className="left-sidebar">
                {/* <!-- Sidebar scroll--> */}
                <div className="scroll-sidebar">
                    {/* <!-- Sidebar navigation--> */}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="user-pro"> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user-img" className="img-circle"/><span className="hide-menu">Prof. Mark</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="javascript:void(0)"><i className="ti-user"></i> My Profile</a></li>
                                    <li><a href="javascript:void(0)"><i className="ti-wallet"></i> My Balance</a></li>
                                    <li><a href="javascript:void(0)"><i className="ti-email"></i> Inbox</a></li>
                                    <li><a href="javascript:void(0)"><i className="ti-settings"></i> Account Setting</a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-power-off"></i> Logout</a></li>
                                </ul>
                            </li>
                            <li className="nav-small-cap">--- PERSONAL</li>
                            <li> <a className="waves-effect waves-dark" href="index.html"><i className="icon-speedometer"></i><span className="hide-menu">Dashboard</span></a>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-layout-grid2"></i><span className="hide-menu">Apps</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="app-calendar.html">Calendar</a></li>
                                    <li><a href="app-chat.html">Chat app</a></li>
                                    <li><a href="app-ticket.html">Support Ticket</a></li>
                                    <li><a href="app-contact.html">Contact / Employee</a></li>
                                    <li><a href="app-contact2.html">Contact Grid</a></li>
                                    <li><a href="app-contact-detail.html">Contact Detail</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-email"></i><span className="hide-menu">Inbox</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="app-email.html">Mailbox</a></li>
                                    <li><a href="app-email-detail.html">Mailbox Detail</a></li>
                                    <li><a href="app-compose.html">Compose Mail</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-palette"></i><span className="hide-menu">Ui Elements <span className="badge rounded-pill bg-primary text-white ms-auto">25</span></span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="ui-cards.html">Cards</a></li>
                                    <li><a href="ui-user-card.html">User Cards</a></li>
                                    <li><a href="ui-buttons.html">Buttons</a></li>
                                    <li><a href="ui-modals.html">Modals</a></li>
                                    <li><a href="ui-tab.html">Tab</a></li>
                                    <li><a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a></li>
                                    <li><a href="ui-tooltip-stylish.html">Tooltip stylish</a></li>
                                    <li><a href="ui-sweetalert.html">Sweet Alert</a></li>
                                    <li><a href="ui-notification.html">Notification</a></li>
                                    <li><a href="ui-progressbar.html">Progressbar</a></li>
                                    <li><a href="ui-nestable.html">Nestable</a></li>
                                    <li><a href="ui-range-slider.html">Range slider</a></li>
                                    <li><a href="ui-timeline.html">Timeline</a></li>
                                    <li><a href="ui-typography.html">Typography</a></li>
                                    <li><a href="ui-horizontal-timeline.html">Horizontal Timeline</a></li>
                                    <li><a href="ui-session-timeout.html">Session Timeout</a></li>
                                    <li><a href="ui-session-ideal-timeout.html">Session Ideal Timeout</a></li>
                                    <li><a href="ui-bootstrap.html">Bootstrap Ui</a></li>
                                    <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                                    <li><a href="ui-bootstrap-switch.html">Bootstrap Switch</a></li>
                                    <li><a href="ui-list-media.html">List Media</a></li>
                                    <li><a href="ui-ribbons.html">Ribbons</a></li>
                                    <li><a href="ui-grid.html">Grid</a></li>
                                    <li><a href="ui-carousel.html">Carousel</a></li>
                                    <li><a href="ui-offcanvas.html">Offcanvas</a></li>
                                    <li><a href="ui-date-paginator.html">Date-paginator</a></li>
                                    <li><a href="ui-dragable-portlet.html">Dragable Portlet</a></li>
                                    <li><a href="ui-spinner.html">Spinner</a></li>
                                    <li><a href="ui-scrollspy.html">Scrollspy</a></li>
                                    <li><a href="ui-toasts.html">Toasts</a></li>
                                </ul>
                            </li>
                            <li className="nav-small-cap">--- PROFESSIONAL</li>
                            <li> <a className="waves-effect waves-dark" href="university-events.html"><i className="ti-calendar"></i><span className="hide-menu">Event</span></a>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="icon-people"></i><span className="hide-menu">Professors</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="university-professors.html">All Professors</a></li>
                                    <li><a href="university-add-professor.html">Add Professor</a></li>
                                    <li><a href="university-edit-professor.html">Edit Professor</a></li>
                                    <li><a href="university-professor-profile.html">Professor Profile</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-graduation-cap"></i><span className="hide-menu">Students</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="university-students.html">All Students</a></li>
                                    <li><a href="university-add-student.html">Add Student</a></li>
                                    <li><a href="university-edit-student.html">Edit Student</a></li>
                                    <li><a href="university-student-profile.html">Student Profile</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-bars"></i><span className="hide-menu">Courses</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="university-courses.html">All Courses</a></li>
                                    <li><a href="university-add-course.html">Add Course</a></li>
                                    <li><a href="university-edit-course.html">Edit Course</a></li>
                                    <li><a href="university-course-info.html">Course Information</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-book"></i><span className="hide-menu">Library</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="university-library-assets.html">Library Assets</a></li>
                                    <li><a href="university-add-asset.html">Add Library Asset</a></li>
                                    <li><a href="university-edit-asset.html">Edit Library Asset</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-building"></i><span className="hide-menu">Department</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="departments.html">Departments</a></li>
                                    <li><a href="university-add-department.html">Add Department</a></li>
                                    <li><a href="university-edit-department.html">Edit Department</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="icon-chart"></i><span className="hide-menu">Reports</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="university-general-report.html">General Report</a></li>
                                    <li><a href="university-income-report.html">Income Report</a></li>
                                    <li><a href="university-expense-report.html">Expense Report</a></li>
                                </ul>
                            </li>
                            <li className="nav-small-cap">--- FORMS, TABLE &amp; WIDGETS</li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-layout-media-right-alt"></i><span className="hide-menu">Forms</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="form-basic.html">Basic Forms</a></li>
                                    <li><a href="form-layout.html">Form Layouts</a></li>
                                    <li><a href="form-addons.html">Form Addons</a></li>
                                    <li><a href="form-material.html">Form Material</a></li>
                                    <li><a href="form-float-input.html">Floating Lable</a></li>
                                    <li><a href="form-pickers.html">Form Pickers</a></li>
                                    <li><a href="form-upload.html">File Upload</a></li>
                                    <li><a href="form-mask.html">Form Mask</a></li>
                                    <li><a href="form-validation.html">Form Validation</a></li>
                                    <li><a href="form-bootstrap-validation.html">Form Bootstrap Validation</a></li>
                                    <li><a href="form-dropzone.html">File Dropzone</a></li>
                                    <li><a href="form-icheck.html">Icheck control</a></li>
                                    <li><a href="form-img-cropper.html">Image Cropper</a></li>
                                    <li><a href="form-bootstrapwysihtml5.html">HTML5 Editor</a></li>
                                    <li><a href="form-typehead.html">Form Typehead</a></li>
                                    <li><a href="form-wizard.html">Form Wizard</a></li>
                                    <li><a href="form-xeditable.html">Xeditable Editor</a></li>
                                    <li><a href="form-summernote.html">Summernote Editor</a></li>
                                    <li><a href="form-tinymce.html">Tinymce Editor</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-layout-accordion-merged"></i><span className="hide-menu">Tables</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="table-basic.html">Basic Tables</a></li>
                                    <li><a href="table-layout.html">Table Layouts</a></li>
                                    <li><a href="table-data-table.html">Data Tables</a></li>
                                    <li><a href="table-footable.html">Footable</a></li>
                                    <li><a href="table-jsgrid.html">Js Grid Table</a></li>
                                    <li><a href="table-responsive.html">Responsive Table</a></li>
                                    <li><a href="table-bootstrap.html">Bootstrap Tables</a></li>
                                    <li><a href="table-editable-table.html">Editable Table</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-settings"></i><span className="hide-menu">Widgets</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="widget-data.html">Data Widgets</a></li>
                                    <li><a href="widget-apps.html">Apps Widgets</a></li>
                                    <li><a href="widget-charts.html">Charts Widgets</a></li>
                                </ul>
                            </li>
                            <li className="nav-small-cap">--- EXTRA COMPONENTS</li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-gallery"></i><span className="hide-menu">Page Layout</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="layout-single-column.html">1 Column</a></li>
                                    <li><a href="layout-fix-header.html">Fix header</a></li>
                                    <li><a href="layout-fix-sidebar.html">Fix sidebar</a></li>
                                    <li><a href="layout-fix-header-sidebar.html">Fixe header &amp; Sidebar</a></li>
                                    <li><a href="layout-boxed.html">Boxed Layout</a></li>
                                    <li><a href="layout-logo-center.html">Logo in Center</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-files"></i><span className="hide-menu">Sample Pages <span className="badge rounded-pill bg-info">25</span></span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="starter-kit.html">Starter Kit</a></li>
                                    <li><a href="pages-blank.html">Blank page</a></li>
                                    <li><a href="javascript:void(0)" className="has-arrow">Authentication <span className="badge rounded-pill bg-success pull-right">6</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="pages-login.html">Login 1</a></li>
                                            <li><a href="pages-login-2.html">Login 2</a></li>
                                            <li><a href="pages-register.html">Register</a></li>
                                            <li><a href="pages-register2.html">Register 2</a></li>
                                            <li><a href="pages-register3.html">Register 3</a></li>
                                            <li><a href="pages-lockscreen.html">Lockscreen</a></li>
                                            <li><a href="pages-recover-password.html">Recover password</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="pages-profile.html">Profile page</a></li>
                                    <li><a href="pages-animation.html">Animation</a></li>
                                    <li><a href="pages-fix-innersidebar.html">Sticky Left sidebar</a></li>
                                    <li><a href="pages-fix-inner-right-sidebar.html">Sticky Right sidebar</a></li>
                                    <li><a href="pages-invoice.html">Invoice</a></li>
                                    <li><a href="pages-treeview.html">Treeview</a></li>
                                    <li><a href="pages-utility-classNamees.html">Helper classNamees</a></li>
                                    <li><a href="pages-search-result.html">Search result</a></li>
                                    <li><a href="pages-scroll.html">Scrollbar</a></li>
                                    <li><a href="pages-pricing.html">Pricing</a></li>
                                    <li><a href="pages-lightbox-popup.html">Lighbox popup</a></li>
                                    <li><a href="pages-gallery.html">Gallery</a></li>
                                    <li><a href="pages-faq.html">Faqs</a></li>
                                    <li><a href="javascript:void(0)" className="has-arrow">Error Pages</a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="pages-error-400.html">400</a></li>
                                            <li><a href="pages-error-403.html">403</a></li>
                                            <li><a href="pages-error-404.html">404</a></li>
                                            <li><a href="pages-error-500.html">500</a></li>
                                            <li><a href="pages-error-503.html">503</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-pie-chart"></i><span className="hide-menu">Charts</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="chart-morris.html">Morris Chart</a></li>
                                    <li><a href="chart-chartist.html">Chartis Chart</a></li>
                                    <li><a href="chart-echart.html">Echarts</a></li>
                                    <li><a href="chart-flot.html">Flot Chart</a></li>
                                    <li><a href="chart-knob.html">Knob Chart</a></li>
                                    <li><a href="chart-chart-js.html">Chartjs</a></li>
                                    <li><a href="chart-sparkline.html">Sparkline Chart</a></li>
                                    <li><a href="chart-extra-chart.html">Extra chart</a></li>
                                    <li><a href="chart-peity.html">Peity Charts</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-light-bulb"></i><span className="hide-menu">Icons</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="icon-material.html">Material Icons</a></li>
                                    <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                                    <li><a href="icon-themify.html">Themify Icons</a></li>
                                    <li><a href="icon-weather.html">Weather Icons</a></li>
                                    <li><a href="icon-simple-lineicon.html">Simple Line icons</a></li>
                                    <li><a href="icon-flag.html">Flag Icons</a></li>
                                    <li><a href="icon-iconmind.html">Mind Icons</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-location-pin"></i><span className="hide-menu">Maps</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="map-google.html">Google Maps</a></li>
                                    <li><a href="map-vector.html">Vector Maps</a></li>
                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-align-left"></i><span className="hide-menu">Multi level dd</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="javascript:void(0)">item 1.1</a></li>
                                    <li><a href="javascript:void(0)">item 1.2</a></li>
                                    <li> <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">Menu 1.3</a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="javascript:void(0)">item 1.3.1</a></li>
                                            <li><a href="javascript:void(0)">item 1.3.2</a></li>
                                            <li><a href="javascript:void(0)">item 1.3.3</a></li>
                                            <li><a href="javascript:void(0)">item 1.3.4</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">item 1.4</a></li>
                                </ul>
                            </li>
                            <li className="nav-small-cap">--- SUPPORT</li>
                            <li> <a className="waves-effect waves-dark" href="../documentation/documentation.html" aria-expanded="false"><i className="far fa-circle text-danger"></i><span className="hide-menu">Documentation</span></a></li>
                            <li> <a className="waves-effect waves-dark" href="pages-login.html" aria-expanded="false"><i className="far fa-circle text-success"></i><span className="hide-menu">Log Out</span></a></li>
                            <li> <a className="waves-effect waves-dark" href="pages-faq.html" aria-expanded="false"><i className="far fa-circle text-info"></i><span className="hide-menu">FAQs</span></a></li>
                        </ul>
                    </nav>
                    {/* <!-- End Sidebar navigation --> */}
                </div>
                {/* <!-- End Sidebar scroll--> */}
            </aside>
            {/* <!-- ============================================================== -->
            <!-- End Left Sidebar - style you can find in sidebar.scss  -->
            <!-- ============================================================== --> */}
            {/* <!-- ============================================================== -->
            <!-- Page wrapper  -->
            <!-- ============================================================== --> */}
            <div class="page-wrapper">
                <Outlet/>
            </div>
        </div>
    </>
  );
}

export default Home;



  {/* <div>
    <Link to="/dashboard"><h4>Dashboard</h4></Link>
    <Link to="/admin"><h4>Admin</h4></Link>
    <Link to="/landing"><h4>Landing Page</h4></Link>
    <Link to="/profile"><h4>Profile</h4></Link>
  </div> */}