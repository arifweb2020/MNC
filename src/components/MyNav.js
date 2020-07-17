import React from 'react';
import {Link} from 'react-router-dom';
const MyNav = () =>{

        return (
            <>
           
				<div className="Header-Top">

					<div className="container-fluid">

						<div className="row" style={{borderBottom:"1px solid #e1e1e1",padding:"3px"}}>

							<div className="col-md-6">
							<ul className="nav">
							<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">English</a>
    <div className="dropdown-menu top-menu">
      <a className="dropdown-item" href="#">French</a>
      <a className="dropdown-item" href="#">Hindi</a>

    </div>
  </li>
  <li style={{marginTop:"5px",color:"#cac3c35c"}}>|</li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Currency</a>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">USD</a>
      <a className="dropdown-item" href="#">EURO</a>
     
    </div>
  </li>
</ul>
							</div>

							<div className="col-md-6">

							<ul className="nav justify-content-end">
    <li className="nav-item">
      <Link className="nav-link" to="#">My Account</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="#">Cart</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="#">Wishlist</Link>
    </li>
	<li className="nav-item">
      <Link className="nav-link" to="#">Checkout</Link>
    </li>
  </ul>
								
							</div>

						</div> {/* end of row*/}

						<div className="row" style={{padding:"15px",marginTop:"12px"}}>
							<div className="col-md-2">
							<h1 style={{fontSize: "70px",fontWeight:"bold", textShadow: "0 1px 0 #ccc"}}><a href="index.html"><span style={{color:"#80bb01"}}>M</span>NC</a></h1>
							</div>

						
							<div className="col-md-3">
								<div>
							<img src={require('../images/img-headphone.png')} /></div>
							<div style={{position:"relative",top:"-48px",left:"68px"}}>
							<span >Call us</span>
							<p>Free Support (+800) 123 456 789</p>
							</div>
							</div>

							<div className="col-md-5">
							<form className="expanding-search-form" style={{border:"2px solid #ddd"}}>
  
							<div className="dropdown" style={{marginLeft:"10px",top:"10px"}}>
  <div type="button" className="dropdown-toggle" data-toggle="dropdown">
    All <span></span>
  </div>
  <div className="dropdown-menu" style={{marginTop:"14px",marginLeft:"-12px",borderRadius:"0px"}}>
    <a className="dropdown-item" href="#">Link 1</a>
    <a className="dropdown-item" href="#">Link 2</a>
    <a className="dropdown-item" href="#">Link 3</a>
  </div>
</div>
<div className="search-container" style={{position:"relative",left:"63px",top:"-13px",borderLeft:"2px solid green"}}>
    
      <input type="text" placeholder="Search Products..." name="search" style={{border:"none",marginLeft:"13px",width:"76%"}} />
      
      <button type="submit" style={{backgroundColor:"#8BC34A",color:"#fff",border:"none"}}><i class="fa fa-search"></i></button>
     
  </div>
  
</form>

							</div>

            <div className="col-md-1">
            <a href="#" className="notification">
            <i class="fa fa-heart"></i>
  <span className="badge">3</span>
</a>
              </div>
              <div className="col-md-1">
              <div class="dropdown">
  <button type="button" class="notification" data-toggle="dropdown" style={{border:"none"}}>
  <i class="fa fa-shopping-cart"></i>
  <span className="badge">3</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Link 1</a>
    <a class="dropdown-item" href="#">Link 2</a>
    <a class="dropdown-item" href="#">Link 3</a>
  </div>
</div>
</div>


						</div>	{/* end of row*/}

            </div>
				</div>

            <div className="row" style={{marginTop:"-25px"}}>
              <div className="col-md-12">
              <nav class="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#8bc34a"}}>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown05">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
         
          
        </ul>
        {/* <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search" />
        </form> */}
      </div>
    </nav>
</div>
</div>

						

				
            </>



        )




}
export default MyNav;