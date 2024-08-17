export default function Login(){
    return (
        <div className="container">
		
				<div className="col-lg-8 col-lg-offset-2 mt">
					<form>
						<h2 className="heading">Log In</h2>
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
						<p className="mt"><button type="button" className="btn btn-cta btn-lg">Login</button></p>
					  </form>
				</div>
    	</div>
    )
}