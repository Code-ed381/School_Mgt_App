import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
const qs = require('qs');


// const UpdateRow = ({ row, updateRow }) => {
//     const [updatedData, setUpdatedData] = useState({
//       id: row.id,
//       first_name: row.first_name,
//       last_name: row.last_name,
//       username: row.username,
//       dob: row.dob,
//       phone: row.phone,
//       class: row.class,
//       address: row.address,
//       town_of_birth: row.hometown,
//       email: row.email
//     });
  
//     useEffect(() => {
//       setUpdatedData({
//         id: row.id,
//         first_name: row.first_name,
//         last_name: row.last_name,
//         username: row.username,
//         date_of_birth: row.date_of_birth,
//         phone: row.phone,
//         grade_id: row.grade_id,
//         address: row.address,
//         town_of_birth: row.town_of_birth,
//         role: row.role,
//         email: row.email
//       });
//     }, [row]);
  
//     const handleChange = (event) => {
//       setUpdatedData({
//         ...updatedData,
//         [event.target.name]: event.target.value
//       });
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       updateRow(updatedData);
//     };
    
//     return (
//         <div class="col-md-4">
//             <div id="responsive-modal" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h4 class="modal-title">Edit Profile</h4>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
//                         </div>
//                         <div class="modal-body">
//                             <form>
//                                 <div class="form-group">
//                                     <label for="recipient-name" class="form-label">First name</label>
//                                     <input type="text" class="form-control" id="recipient-name" value={row.first_name}/>
//                                 </div>
//                                 <div class="form-group">
//                                     <label for="message-text" class="form-label">Message:</label>
//                                     <textarea class="form-control" id="message-text"></textarea>
//                                 </div>
//                             </form>
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-default waves-effect" data-bs-dismiss="modal">Close</button>
//                             <button type="button" class="btn btn-danger waves-effect waves-light text-white">Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const Dashboard = ()=> {
    const [rows, setRows] = useState([]);
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        student_class: '',
        gender: '',
        address: '',
        hometown: '',
        dob: null,
        user: 13
    })

    useEffect(() => {
        Axios.get('http://localhost:3001/users')
        .then((res)=>{
            setRows(res.data)
        })
    }, []) 

    const handleChange = (e)=> {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        Axios.post('http://localhost:3001/addstudent', qs.data,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        )
        .then((res)=> {
            console.log(res.data);

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const updateRow = (updatedRow) => {
        Axios.put(`http://localhost:3001/update/${updatedRow.id}`, updatedRow)
        .then((response) => {
            setRows(rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
        })
        .catch((error) => {
        console.error(error);
        });
    };

    const handleDelete = async (id) => {
        try {
            await Axios.delete(`http://localhost:3001/users/`+id)
            .then((res)=> {
                console.log(res)
            })
            // window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }




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
                            <h4 class="card-title"><center>USERS</center></h4>
                            <button 
                                type="button" 
                                class="btn btn-info text-white"
                                data-bs-toggle="modal" 
                                data-bs-target="#verticalcenter"
                                
                            >
                                <i class='fas fa-plus-circle'></i> Add new student
                            </button>
                            <div class="btn-group" style={{float: 'right'}}>
                                <button type="button" class="btn btn-danger dropdown-toggle text-white"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter users by role
                                </button>
                                <div class="dropdown-menu">
                                    <a 
                                        class="dropdown-item" 
                                        href="#"
                                        onClick={()=>{swal("Hello")}}
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
                                            <th>Gender</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows.map((row) =>  
                                            <tr key={row.id}>
                                                <td>{row.first_name}</td>
                                                <td>{row.last_name}</td>
                                                <td>{row.username}</td>
                                                <td>{row.dob}</td>
                                                <td>{row.phone}</td>
                                                <td>{row.student_class}</td>
                                                <td>{row.address}</td>
                                                <td>{row.hometown}</td>
                                                <td>{row.gender_type}</td>
                                                <td>{row.email}</td>
                                                <td>
                                                    <button 
                                                        type="button" 
                                                        class="btn btn-danger" 
                                                        onClick={()=>{
                                                            swal({
                                                                title: "Are you sure?",
                                                                text: "Please confirm if you want this user deleted!",
                                                                icon: "warning",
                                                                buttons: {
                                                                    cancel: true,
                                                                    confirm: true},
                                                                dangerMode: true,
                                                            })
                                                            .then((willDelete)=>{
                                                                if(willDelete) {
                                                                    handleDelete(row.user)
                                                                    swal("User deleted successfully!", {
                                                                        icon: "success",
                                                                        button: false
                                                                    });
                                                                } 
                                                            })
                                                            .then(
                                                                setTimeout(() => {
                                                                    window.location.reload();
                                                                },3000 )
                                                            )
                                                        }}
                                                    ><i class="ti-trash"></i></button> .
                                                    <button 
                                                        type="button"  
                                                        class="btn btn-info" 
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#responsive-modal"
                                                        
                                                    ><i class="ti-pencil"></i></button>
                                                </td>
                                            </tr> )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {/* <UpdateRow/> */}
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


        <div id="verticalcenter" class="modal" tabindex="-1" role="dialog" aria-labelledby="vcenter" aria-hidden="true">
            <div class="modal-dialog bs-example-modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="vcenter">Add new student</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body">
                            <form action={handleSubmit} class="form-horizontal form-bordered">
                                <div class="form-body">
                                    <div class="form-group row">
                                        <label class="control-label text-end col-md-3">First Name</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" name='first_name' value={data.first_name} onChange={handleChange}/>
                                            <small class="form-control-feedback"> This is inline help </small> 
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label text-end col-md-3">Last Name</label>
                                        <div class="col-md-9">
                                            <input type="text"  class="form-control" name='last_name' value={data.last_name} onChange={handleChange}/>
                                            <small class="form-control-feedback"> This is inline help </small> </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label text-end col-md-3">Gender</label>
                                        <div class="col-md-9">
                                            <select class="form-control form-select" name='gender' value={data.gender} onChange={handleChange}>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label text-end col-md-3">Phone number</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" name='phone' value={data.phone} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label text-end col-md-3">Class</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" name='student_class' value={data.student_class} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label text-end col-md-3">Date of Birth</label>
                                        <div class="col-md-9">
                                            <input type="date" class="form-control" placeholder="dd/mm/yyyy" name='dob' value={data.dob} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label text-end col-md-3">Hometown</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" name='hometown' value={data.hometown} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label text-end col-md-3">Residential Address</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" name='address' value={data.address} onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-actions">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="offset-sm-3 col-md-9">
                                                    <button type="submit" class="btn btn-success text-white"> <i class="fa fa-check"></i> Submit</button>
                                                    <button type="button" class="btn btn-inverse" data-bs-dismiss="modal">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-info waves-effect text-white" data-bs-dismiss="modal">Close</button>
                    </div> */}
                </div>
                {/* <!-- /.modal-content --> */}
            </div>
            {/* <!-- /.modal-dialog --> */}
        </div>
    </>
  );
}

export default Dashboard;