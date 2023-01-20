import { Link } from "react-router-dom";


const Dashboard = ()=> {
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
        <div class="row">
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase">HTML Course</h5>
                        <div class="text-end"> <span class="text-muted">Monthly Fees</span>
                            <h2><sup><i class="ti-arrow-up text-success"></i></sup> $1200</h2>
                        </div>
                        <span class="text-success">20%</span>
                        <div class="progress">
                            <div class="progress-bar bg-success" style={{ width: '20%', height: '6px' }} role="progressbar"> <span class="sr-only">60% Complete</span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase">Web Development Course</h5>
                        <div class="text-end"> <span class="text-muted">Monthly Fees</span>
                            <h2><sup><i class="ti-arrow-down text-primary"></i></sup> $5000</h2>
                        </div>
                        <span class="text-primary">30%</span>
                        <div class="progress">
                            <div class="progress-bar bg-primary" style={{ width: '30%', height: '6px' }} role="progressbar"> <span class="sr-only">60% Complete</span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase">Web Designing Course</h5>
                        <div class="text-end"> <span class="text-muted">Monthly Fees</span>
                            <h2><sup><i class="ti-arrow-up text-info"></i></sup> $8000</h2>
                        </div>
                        <span class="text-info">60%</span>
                        <div class="progress">
                            <div class="progress-bar bg-info" style={{ width: '40%', height: '6px'}} role="progressbar"> <span class="sr-only">60% Complete</span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase">App Development Course</h5>
                        <div class="text-end"> <span class="text-muted">Yearly Fees</span>
                            <h2><sup><i class="ti-arrow-up text-inverse"></i></sup> $12000</h2>
                        </div>
                        <span class="text-inverse">80%</span>
                        <div class="progress">
                            <div class="progress-bar bg-inverse" style={{ width: '40%', height: '6px' }} role="progressbar"> <span class="sr-only">60% Complete</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- /.row -->
        <!-- ============================================================== -->
        <!-- End Info box -->
        <!-- ============================================================== --> */}
      </div>
    </>
  );
}

export default Dashboard;