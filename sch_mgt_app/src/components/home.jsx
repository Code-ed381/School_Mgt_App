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
        window.location = '/login'
        // setUser(null) 
    })
}

  return (
    <>
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to="dashboard"><i className="menu-icon fa fa-laptop"></i>Dashboard </Link>
                    </li>
                    <li className="menu-title">UI elements</li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-cogs"></i>Components</a>
                        <ul className="sub-menu children dropdown-menu">                            <li><i className="fa fa-puzzle-piece"></i><a href="ui-buttons.html">Buttons</a></li>
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
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Tables</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="fa fa-table"></i><a href="tables-basic.html">Basic Table</a></li>
                            <li><i className="fa fa-table"></i><a href="tables-data.html">Data Table</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Forms</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                            <li><i className="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                        </ul>
                    </li>

                    <li className="menu-title">Icons</li>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks"></i>Icons</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-fort-awesome"></i><a href="font-fontawesome.html">Font Awesome</a></li>
                            <li><i className="menu-icon ti-themify-logo"></i><a href="font-themify.html">Themefy Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="widgets.html"> <i className="menu-icon ti-email"></i>Widgets </a>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>Charts</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-line-chart"></i><a href="charts-chartjs.html">Chart JS</a></li>
                            <li><i className="menu-icon fa fa-area-chart"></i><a href="charts-flot.html">Flot Chart</a></li>
                            <li><i className="menu-icon fa fa-pie-chart"></i><a href="charts-peity.html">Peity Chart</a></li>
                        </ul>
                    </li>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>Maps</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                            <li><i className="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                        </ul>
                    </li>
                    <li className="menu-title">Extras</li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-glass"></i>Pages</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-sign-in"></i><a href="page-login.html">Login</a></li>
                            <li><i className="menu-icon fa fa-sign-in"></i><a href="page-register.html">Register</a></li>
                            <li><i className="menu-icon fa fa-paper-plane"></i><a href="pages-forget.html">Forget Pass</a></li>
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
                            <Link className="nav-link" to="profile"><i className="fa fa- user"></i>My Profile</Link>

                            <a className="nav-link" href="#"><i className="fa fa- user"></i>Notifications <span className="count">13</span></a>

                            <a className="nav-link" href="#"><i className="fa fa -cog"></i>Settings</a>

                            <Link className="nav-link" to="/logout"><i className="fa fa-power -off"></i>Logout</Link>
                        </div>
                    </div>

                </div>
            </div>
        </header>

        {/* <div class="breadcrumbs" style={{backgroundColor: '#ffe135'}}>
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                        <div class="page-header float-left">
                            <div class="page-title">
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li><a href="#">Dashboard</a></li>
                                    <li><a href="#">Table</a></li>
                                    <li class="active">Basic table</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}


        <div class="content">
            <div class="animated fadeIn">
                <Outlet/>
            </div>
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