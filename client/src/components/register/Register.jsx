export default function Register(){
    return (
        <div className="container">
		
        <div className="col-lg-8 col-lg-offset-2 mt">
            <form>
                <h2 className="heading">Register</h2>
                <div className="group">      
                  <input type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Email</label>
                </div>
                  
                <div className="group">      
                  <input type="password" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Password</label>
                </div>

                <div className="group">      
                  <input type="password" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Repeat Password</label>
                </div>
                <p className="mt"><button type="button" className="btn btn-cta btn-lg">Register</button></p>
              </form>
        </div>
</div>
    )
}