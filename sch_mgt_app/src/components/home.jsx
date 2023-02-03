import { Outlet, Link } from "react-router-dom";
import Axios from "axios";
// import { useState, useEffect } from "react";

function Home() {
    // const [username, setUsername] = useState('')
    // useEffect(() => {
    //     Axios.get('http://localhost:3001/login')
    //     .then((res)=>{
    //         setUsername(res.data[0].username)
    //         console.log(res.data[0].username) 
    //     })
    // }, [])

    const logout = async (e)=>  {
        e.preventDefault()

        Axios.get('http://localhost:3001/logout')
        .then((res)=>{
            window.location = '/login'
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
                            <span className="hidden-xs"><span className="font-bold">AJxT</span></span>
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
                                                        <h5>Mark</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
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
                            <li className="user-pro"> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user-img" className="img-circle"/><span className="hide-menu">Mark</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="javascript:void(0)"><i className="ti-user"></i> My Profile</a></li>
                                    <li><a href="javascript:void(0)"><i className="ti-wallet"></i> My Balance</a></li>
                                    <li><a href="javascript:void(0)"><i className="ti-email"></i> Inbox</a></li>
                                    <li><a href="javascript:void(0)"><i className="ti-settings"></i> Account Setting</a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-power-off"></i> Logout</a></li>
                                </ul>
                            </li>
                            <li className="nav-small-cap">--- ADMIN</li>
                            <li> <a className="waves-effect waves-dark" href="index.html"><i className="icon-user"></i><span className="hide-menu">All Users</span></a>
                            </li>
                            <li> <a className="waves-effect waves-dark" href="index.html"><i className="icon-people"></i><span className="hide-menu">All students</span></a>
                            </li>
                                  
                            <li> <a className="waves-effect waves-dark" href="#" onClick={logout} aria-expanded="false"><i className=" icon-logout text-danger"></i><span className="hide-menu">Log Out</span></a></li>
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