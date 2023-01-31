import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";


const Dashboard = ()=> {
    const [data, setData] = useState([]);
    const [values, setValues] = useState([]);
    const [role, setRole] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/users')
        .then((res)=>{
            setData(Object.keys(res.data[0]))
            setValues(Object.values(res.data))
            console.log(res)
        })
    }, []) 

    // const filter =  async (e)=> {
    //     e.preventDefault()
    //     // setRole(e.target.value)

    //     Axios.post('http://localhost:3001/users', {
    //         role: role,
    //     })
    //     .then((res)=> {
    //         setValues(Object.values(res.data))
    //     }) 
    // }

    const listItems = data.map((data) =>  
        <th>{data}</th>  
        
    );  

    const dbvalues = values.map((values) =>  
    <tr>
        <td>{values.first_name}</td>
        <td>{values.last_name}</td>
        <td>{values.username}</td>
        <td>{values.date_of_birth}</td>
        <td>{values.phone}</td>
        <td>{values.grade_id}</td>
        <td>{values.address}</td>
        <td>{values.town_of_birth}</td>
        <td>{values.role}</td>
        <td>{values.email}</td>
        <td>
            <button type="button" class="btn btn-danger"><i class="ti-trash"></i></button> .
            <button type="button" class="btn btn-info"><i class="ti-pencil"></i></button>
        </td>
    </tr> )

    const staff = values.filter(item => item.role === role).map((values) =>  
    <tr>
        <td>{values.first_name}</td>
        <td>{values.last_name}</td>
        <td>{values.username}</td>
        <td>{values.date_of_birth}</td>
        <td>{values.phone}</td>
        <td>{values.grade_id}</td>
        <td>{values.address}</td>
        <td>{values.town_of_birth}</td>
        <td>{values.role}</td>
        <td>{values.email}</td>
        <td><button value={values.profile_id}></button></td>
    </tr> );  

    // const getData = async()=> {
    //     const { data } = await Axios.get('http://localhost:3001/getusers');
    //     setData(data);
    // }



  return (
    <>
      {/* <!-- ============================================================== -->
      <!-- Container fluid  -->
      <!-- ============================================================== --> */}
      <div class="container-fluid">
        {/* <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== --> */}
          <div class="row page-titles">
              <div class="col-md-5 align-self-center">
                  <h4 class="text-themecolor">Dashboard</h4>
              </div>
              <div class="col-md-7 align-self-center text-end">
                  <div class="d-flex justify-content-end align-items-center">
                      <ol class="breadcrumb justify-content-end">
                          <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                          <li class="breadcrumb-item active">Dashboard</li>
                      </ol>
                      {/* <button type="button" class="btn btn-info d-none d-lg-block m-l-15 text-white"><i class="fa fa-plus-circle"></i> Create New</button> */}
                  </div>
              </div>
          </div>
        {/* <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <!-- ============================================================== --> */}

        {/* <!-- ============================================================== -->
        <!-- Info box -->
        <!-- ============================================================== -->
        <!-- .row --> */}
        {/* <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== --> */}
        <div class="container-fluid">

            {/* <!-- ============================================================== -->
            <!-- Start Page Content -->
            <!-- ============================================================== --> */} 
            <div class="row">
                {/* <!-- column --> */}
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">{role}</h4>
                            <div class="btn-group">
                                            <button type="button" class="btn btn-danger dropdown-toggle text-white"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Filter users by role
                                            </button>
                                            <div class="dropdown-menu">
                                                <a 
                                                    class="dropdown-item" 
                                                    href="#"
                                                    onClick={staff}
                                                >
                                                    Staff
                                                </a>
                                                {/* <input  
                                                    class="dropdown-item" 
                                                    type='submit'
                                                    value='staff'
                                                    onClick={filter}
                                                /> */}
                                                
                                                <a 
                                                    class="dropdown-item"   
                                                    href="#"
                                                    // onClick={(e) => { 
                                                    //     setRole('student')
                                                    //     filter()
                                                    // }}
                                                >
                                                    Students
                                                </a>
                                                <div class="dropdown-divider"></div>
                                                <a 
                                                    class="dropdown-item" 
                                                    href="#"
                                                    // onClick={(e) => { 
                                                    //     setRole('admin')
                                                    //     filter()
                                                    // }}
                                                >
                                                    Admin
                                                </a>
                                            </div>
                                        </div>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            <th>Date of Birth</th>
                                            <th>Phone Number</th>
                                            <th>Grade</th>
                                            <th>Address</th>
                                            <th>Hometown</th>
                                            <th>Role</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr>
                                            {dbvalues}
                                        </tr> */}
                                        {dbvalues}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ============================================================== -->
            <!-- End PAge Content -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Right sidebar -->
            <!-- ============================================================== -->
            <!-- .right-sidebar --> */}
            <div class="right-sidebar">
                <div class="slimscrollright">
                    <div class="rpanel-title"> Service Panel <span><i class="ti-close right-side-toggle"></i></span> </div>
                    <div class="r-panel-body">
                        <ul id="themecolors" class="m-t-20">
                            <li><b>With Light sidebar</b></li>
                            <li><a href="javascript:void(0)" data-skin="skin-default" class="default-theme">1</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-green" class="green-theme">2</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-red" class="red-theme">3</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-blue" class="blue-theme working">4</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-purple" class="purple-theme">5</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-megna" class="megna-theme">6</a></li>
                            <li class="d-block m-t-30"><b>With Dark sidebar</b></li>
                            <li><a href="javascript:void(0)" data-skin="skin-default-dark" class="default-dark-theme ">7</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-green-dark" class="green-dark-theme">8</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-red-dark" class="red-dark-theme">9</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-blue-dark" class="blue-dark-theme">10</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-purple-dark" class="purple-dark-theme">11</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-megna-dark" class="megna-dark-theme ">12</a></li>
                        </ul>
                        <ul class="m-t-20 chatonline">
                            <li><b>Chat option</b></li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/1.jpg" alt="user-img" class="img-circle"/> <span>Varun Dhavan <small class="text-success">online</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/2.jpg" alt="user-img" class="img-circle"/> <span>Genelia Deshmukh <small class="text-warning">Away</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/3.jpg" alt="user-img" class="img-circle"/> <span>Ritesh Deshmukh <small class="text-danger">Busy</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/4.jpg" alt="user-img" class="img-circle"/> <span>Arijit Sinh <small class="text-muted">Offline</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/5.jpg" alt="user-img" class="img-circle"/> <span>Govinda Star <small class="text-success">online</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/6.jpg" alt="user-img" class="img-circle"/> <span>John Abraham<small class="text-success">online</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/7.jpg" alt="user-img" class="img-circle"/> <span>Hritik Roshan<small class="text-success">online</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/8.jpg" alt="user-img" class="img-circle"/> <span>Pwandeep rajan <small class="text-success">online</small></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- ============================================================== -->
            <!-- End Right sidebar -->
            <!-- ============================================================== --> */}
        </div>
        {/* <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== --> */}
        {/* <!-- /.row -->
        <!-- ============================================================== -->
        <!-- End Info box -->
        <!-- ============================================================== --> */}
      </div>
    </>
  );
}

export default Dashboard;