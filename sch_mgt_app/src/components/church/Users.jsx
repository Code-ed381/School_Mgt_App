import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';

const PROJECT_URI = 'https://pffvjutwxkszuvnsqayc.supabase.co'
const PROJECT_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZnZqdXR3eGtzenV2bnNxYXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIwMTMxMDUsImV4cCI6MTk3NzU4OTEwNX0.JryH2jtpXFt-dwHAEdMVH0ykYB3cRfHXS0DKiGM1Z8c'

const supabase = createClient(PROJECT_URI, PROJECT_ANON)



const EventAppUsers = () => {
    const [data, setData] = useState([])

    let isMounted = false
    
    useEffect(() => {
        const controller = new AbortController();

        if(!isMounted) { 
            isMounted = true
            const getCategories = async ()=> {
                const results = await supabase.from('profile').select()
                setData(results.data)
                console.log(results.data)
            }
            getCategories()
        }


        return ()=> {
            controller.abort();
        }
    }, []) 



    return(
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
                    <h4 class="text-themecolor">Users</h4>
                </div>
                <div class="col-md-7 align-self-center text-end">
                    <div class="d-flex justify-content-end align-items-center">
                        <ol class="breadcrumb justify-content-end">
                            <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li class="breadcrumb-item active">Users</li>
                        </ol>
                        {/* <button type="button" class="btn btn-info d-none d-lg-block m-l-15 text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-plus-circle"></i> Create New Event</button> */}
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
            {/* <!-- Row --> */}
                <div class="row">
                {/* <!-- .col --> */}
                <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table color-table dark-table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>Nationality</th>
                                                <th>Role</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((data)=>
                                                <tr>
                                                    <td>{data.id}</td>
                                                    <td>{data.first_name}</td>
                                                    <td>{data.last_name}</td>
                                                    <td>{data.username}</td>
                                                    <td>{data.phone}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.address}</td>
                                                    <td>{data.nationality}</td>
                                                    <td><span class="label label-danger">admin</span> </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <!-- /.col --> */}
                </div>
                {/* <!-- Row --> */}
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
    )

}


export default EventAppUsers;
