import React from "react";


const Profile = () => {
    return(
        <>
        <div class="row">
            <div class="col-md-4">
                <aside class="profile-nav alt">
                    <section class="card">
                        <div class="card-header user-header alt bg-dark">
                            <div class="media">
                                <a href="#">
                                    <img class="align-self-center rounded-circle mr-3" style={{width: "85px", height: "85px;"}} alt="" src="images/admin.jpg" />
                                </a>
                                <div class="media-body">
                                    <h2 class="text-light display-6">Jim Doe</h2>
                                    <p>Project Manager</p>
                                </div>
                            </div>
                        </div>


                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <a href="#"> <i class="fa fa-envelope-o"></i> Mail Inbox <span class="badge badge-primary pull-right">10</span></a>
                            </li>
                            <li class="list-group-item">
                                <a href="#"> <i class="fa fa-tasks"></i> Recent Activity <span class="badge badge-danger pull-right">15</span></a>
                            </li>
                            <li class="list-group-item">
                                <a href="#"> <i class="fa fa-bell-o"></i> Notification <span class="badge badge-success pull-right">11</span></a>
                            </li>
                            <li class="list-group-item">
                                <a href="#"> <i class="fa fa-comments-o"></i> Message <span class="badge badge-warning pull-right r-activity">03</span></a>
                            </li>
                        </ul>

                    </section>
                </aside>
            </div>
        </div>
        </>
    )

}


export default Profile;