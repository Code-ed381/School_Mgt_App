import { useNavigate } from "react-router-dom";

const Unauthorized = ()=> {
    const navigate = useNavigate();

    const goBack = ()=> navigate(-1);

    return (
        <>
            {/* <!-- ============================================================== -->
            <!-- Main wrapper - style you can find in pages.scss -->
            <!-- ============================================================== --> */}
            <section id="wrapper">
                <div class="login-register" style={{backgroundImage: 'url(../assets/images/background/login-register.jpg)' }}>
                    <div class="login-box card">
                        <div class="card-body">
                        <h1>Unauthorized</h1>
                        <br/>
                        <p>You do not have access to the requested page.</p>
                        <div>
                            <button onClick={goBack}>Go back</button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <!-- ============================================================== -->
            <!-- End Wrapper -->
            <!-- ============================================================== --> */}
        </>
    );
}


export default Unauthorized




{/* <div className="App">
    <header className="App-header">
        <h2>Login</h2>
        <h3>{message}</h3>
        <input 
            type="mail" 
            name="mail" 
            placeholder="Enter your email" 
            onChange={(e) => { 
                setMail(e.target.value)
            }}
        /><br />
        <input 
            type="password" 
            name="password" 
            placeholder="Enter your password" 
            onChange={(e) => { 
                setPassword(e.target.value)
            }}
        /><br />
        {user ? (<input type="submit" id="logout" onClick={logout} value="Log out"/>): (<input type="submit" id="submit" onClick={handleClick} value="Log in"/>)}
        
        <input type="submit" id="user" onClick={viewUser} value="View user"/>
        <p><a href="/signup">Sign Up</a></p>
    </header>
</div> */}