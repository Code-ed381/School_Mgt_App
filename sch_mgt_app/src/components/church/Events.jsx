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
                const results = await supabase.from('events').select(`*,
                 categories(name)     
                `)
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
                    <h4 class="text-themecolor">Events</h4>
                </div>
                <div class="col-md-7 align-self-center text-end">
                    <div class="d-flex justify-content-end align-items-center">
                        <ol class="breadcrumb justify-content-end">
                            <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li class="breadcrumb-item active">Events</li>
                        </ol>
                        <button type="button" class="btn btn-info d-none d-lg-block m-l-15 text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-plus-circle"></i> Create New Event</button>
                    </div>
                </div>
                <div class="modal bs-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLabel1">Add New Event</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail111" class="form-label">Event Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail111" placeholder="Enter the name of the event"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword12" class="form-label">Host</label>
                                        <input type="text" class="form-control" id="exampleInputPassword12" placeholder="Enter the host of this event"/>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Category</label>
                                        <select class="form-control form-select" data-placeholder="Choose a Category" tabindex="1">
                                            <option><span class="text-muted">--Select the type of event--</span></option>
                                            <option value="seminar">Seminar</option>
                                            <option value="outreach">Outreach</option>
                                            <option value="virtual">Virtual</option>
                                        </select>
                                    </div>                              
                                    <div class="form-group">
                                        <label for="exampleInputEmail12" class="form-label">Location</label>
                                        <input type="email" class="form-control" id="exampleInputEmail12" placeholder="Enter the event destination"/>
                                    </div>
                                    <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label class="m-t-20 form-label">Date</label>
                                            <input type="date" class="form-control mydatepicker" placeholder="2017-06-04" id="mdate"/>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="m-t-20 form-label">Time</label>
                                            <input type="time" class="form-control" id="timepicker" placeholder="Check time"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword11" class="form-label">Phone</label>
                                        <input type="text" class="form-control" id="exampleInputPassword11" placeholder="Enter phone number for RSVP"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword11" class="form-label">Social Media</label>
                                        <input type="text" class="form-control" id="exampleInputPassword11" placeholder="Facebook"/>
                                        <input type="text" class="form-control" id="exampleInputPassword11" placeholder="Youtube"/>
                                        <input type="text" class="form-control" id="exampleInputPassword11" placeholder="Twitter"/>
                                        <input type="text" class="form-control" id="exampleInputPassword11" placeholder="Instagram"/>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputPassword12" class="form-label">Description</label>
                                        <textarea class="form-control" id="exampleTextarea" rows="5" placeholder="Write a short description about the event"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-success me-2 text-white">Submit</button>
                                    <button type="submit" class="btn btn-dark"  data-bs-dismiss="modal">Cancel</button>
                                </form>
                            </div>
                        </div>
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
            {/* <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                        <h4 class="card-title">Users</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((data) =>  
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                </tr>
                            )}
                            </tbody>

                            
                            
                            
                            
                        </table>

                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!-- Row --> */}
                <div class="row">
                   
                    {/* <!-- Column --> */}
                    {data.map((data)=> 
                    <div class="col-lg-3">
                        <div class="card">
                            <img class="card-img-top" src={data.poster_url} alt="Card image cap" width={250} height={250}/>
                            <div class="card-body">
                                <ul class="list-inline font-14">
                                    <li class="p-l-0">{data.date}</li>
                                    <li><a href="javascript:void(0)" class="link">3 Comment</a></li>
                                </ul>
                                <h6>{data.categories.name}</h6>
                                <h3 class="font-normal">{data.name}</h3>
                                <div class='truncate'>
                                    <p class="m-b-0 m-t-10">{data.description}</p>

                                </div>
                                <button class="btn btn-success btn-rounded waves-effect waves-light m-t-20 text-white">Read more</button>
                            </div>
                        </div>
                    </div>
                    )}
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
