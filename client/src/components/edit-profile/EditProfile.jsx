export default function EditProfile(){
    return (
        <div className="container">
		
        <div className="col-lg-8 col-lg-offset-2 mt">
            <form>
                <h2 className="heading">Edit Your Profile</h2>
                <div className="group">      
                  <input type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Name</label>
                </div>
                  
                <div className="group">      
                  <input type="password" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Occupation</label>
                </div>

                <div className="group">      
                  <input type="password" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>About You</label>
                </div>

                <p className="mt"><button type="button" className="btn btn-cta btn-lg">Save</button></p>
              </form>
        </div>
</div>
    )
}