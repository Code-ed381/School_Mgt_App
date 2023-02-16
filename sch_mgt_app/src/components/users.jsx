import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Users = () => {
    const [users, setUsers] = useState([]);
    const axiosPrivate = useAxiosPrivate()
    const { auth } = useAuth()

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async ()=> {
            try {
                const res = await axiosPrivate.get('/users', {
                    signal: controller.signal,
                });
                console.log(res.data);
                console.log(auth)
                isMounted && setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getUsers();

        return ()=> {
            isMounted = false;
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
                    <h4 class="text-themecolor">Students</h4>
                </div>
                <div class="col-md-7 align-self-center text-end">
                    <div class="d-flex justify-content-end align-items-center">
                        <ol class="breadcrumb justify-content-end">
                            <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li class="breadcrumb-item active">Users</li>
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
                            <h4 class="card-title">Users</h4>
                            {
                                users?.length
                                    ? (
                                        <ul>
                                            {users.map((user, i)=> <li key={i}>{user?.username}</li>)}
                                        </ul>
                                    ) : <p>No users to display</p>
                            }
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
    )

}


export default Users;
