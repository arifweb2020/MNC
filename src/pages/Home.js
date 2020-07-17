import React from 'react';


const Home = () =>{
  
    const avatararraylist = [
        {

            id : 1,
            name : "Arif",
            work : "Web Developer",
            img : require("../images/banner3-1-2.jpg")

        },
        {

            id : 2,
            name : "Asif",
            work : "SEo Developer",
            img : require("../images/banner3-2.jpg")

        },
        {

            id : 3,
            name : "Arim",
            work : "Smm Developer",
            img : require("../images/banner3-3-2.jpg")

        },
        {

            id : 4,
            name : "Amish",
            work : "Mobile Developer",
            img : require("../images/banner3-1-2.jpg")
        }


]

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
<li>{number}</li>
);  

const avatarlistcard = avatararraylist.map ( (avatarcard, i) => {
    
    return <Avatarlist key={i} id={avatararraylist[i].id}
    name={avatararraylist[i].name}
    work={avatararraylist[i].work}
    img={avatararraylist[i].img}
    />
}
)
return (

    <>
    
<div id="demo" className="carousel slide" data-ride="carousel">
  {/* <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require('../images/sl1.jpg')} alt="Los Angeles" style={{height:"400px"}} />
      <div className="carousel-caption" style={{bottom:"140px"}}>
        <h1 style={{color:"black",fontWeight:"bold"}}>Happy Summer 2020</h1>
        <h2 style={{color:"black",fontWeight:"bold"}}>shoping Now</h2>
      </div>   
    </div>
    {/* <div className="carousel-item">
    <img src={require('../images/sl2.jpg')} alt="Los Angeles" width="1100" height="500" />
      <div className="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>   
    </div> */}
    
  </div>
  {/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a> */}
</div>


<div className="container-fluid">

    <div className="row" style={{marginTop:"40px"}}>
        <div className="col-md-3" style={{position:"relative",maxWidth:"20%"}}>
    <div class="single-support mt-30" style={{display:"flex"}}>
                            <img src={require('../images/icon-policy.png')} alt="delivery" />
                            <div class="support-content" style={{marginLeft:"20px"}}>
                                <strong>Free Delivery</strong>
                                <p>For all oders over $99</p>
                            </div>
                        </div>
  </div>

  
  <div className="col-md-3" style={{position:"relative",maxWidth:"20%"}}>
    <div class="single-support mt-30" style={{display:"flex"}}>
                            <img src={require('../images/icon-policy2.png')} alt="delivery" />
                            <div class="support-content" style={{marginLeft:"20px"}}>
                                <strong>Free Delivery</strong>
                                <p>For all oders over $99</p>
                            </div>
                        </div>
  </div>

  <div className="col-md-3" style={{position:"relative",maxWidth:"20%"}}>
    <div class="single-support mt-30" style={{display:"flex"}}>
                            <img src={require('../images/icon-policy3.png')} alt="delivery" />
                            <div class="support-content" style={{marginLeft:"20px"}}>
                                <strong>Free Delivery</strong>
                                <p>For all oders over $99</p>
                            </div>
                        </div>
  </div>

  <div className="col-md-3" style={{position:"relative",maxWidth:"20%"}}>
    <div class="single-support mt-30" style={{display:"flex"}}>
                            <img src={require('../images/icon-policy4.png')} alt="delivery" />
                            <div class="support-content" style={{marginLeft:"20px"}}>
                                <strong>Free Delivery</strong>
                                <p>For all oders over $99</p>
                            </div>
                        </div>
  </div>

  <div className="col-md-3" style={{position:"relative",maxWidth:"20%"}}>
    <div class="single-support mt-30" style={{display:"flex"}}>
                            <img src={require('../images/icon-policy5.png')} alt="delivery" />
                            <div class="support-content" style={{marginLeft:"20px"}}>
                                <strong>Free Delivery</strong>
                                <p>For all oders over $99</p>
                            </div>
                        </div>
  </div>


        </div> {/*end of row*/}


        <div className="row" >

                <div className="col-md-2">
                <div className="single-categories-item mt-30">
                            <div className="cat-item-image">
                                <a href="#"><img src={require('../images/category-thumb-1.jpg')} alt="products" /></a>
                            </div>
                            <div className="categories-title">
                                <h6><a href="#">Vegetables</a></h6>
                                <p>11 products</p>
                            </div>
                        </div>
                </div>

                <div className="col-md-2">
                <div className="single-categories-item mt-30">
                            <div className="cat-item-image">
                                <a href="#"><img src={require('../images/category-thumb-2.jpg')} alt="products" /></a>
                            </div>
                            <div className="categories-title">
                                <h6><a href="#">Vegetables</a></h6>
                                <p>11 products</p>
                            </div>
                        </div>
                </div>

                <div className="col-md-2">
                <div className="single-categories-item mt-30">
                            <div className="cat-item-image">
                                <a href="#"><img src={require('../images/category-thumb-3.jpg')} alt="products" /></a>
                            </div>
                            <div className="categories-title">
                                <h6><a href="#">Vegetables</a></h6>
                                <p>11 products</p>
                            </div>
                        </div>
                </div>

                <div className="col-md-2">
                <div className="single-categories-item mt-30">
                            <div className="cat-item-image">
                                <a href="#"><img src={require('../images/category-thumb-4.jpg')} alt="products" /></a>
                            </div>
                            <div className="categories-title">
                                <h6><a href="#">Vegetables</a></h6>
                                <p>11 products</p>
                            </div>
                        </div>
                </div>

                <div className="col-md-2">
                <div className="single-categories-item mt-30">
                            <div className="cat-item-image">
                                <a href="#"><img src={require('../images/category-thumb-5.jpg')} alt="products" /></a>
                            </div>
                            <div className="categories-title">
                                <h6><a href="#">Vegetables</a></h6>
                                <p>11 products</p>
                            </div>
                        </div>
                </div>

                <div className="col-md-2">
                <div className="single-categories-item mt-30">
                            <div className="cat-item-image">
                                <a href="#"><img src={require('../images/category-thumb-6.jpg')} alt="products" /></a>
                            </div>
                            <div className="categories-title">
                                <h6><a href="#">Vegetables</a></h6>
                                <p>11 products</p>
                            </div>
                        </div>
                </div>
        
            </div>{/*end of row*/}

            <div className="row">

    {/* <h5 style={{color:"black"}}> <ul>{listItems}</ul></h5> */}
{avatarlistcard}


    

                </div>


</div>
    </>


);


}

export default Home


const Avatarlist = (props) =>{

    return (
    <>
    
        <div className="col-md-4">
           
           <img  src={props.img} alt="Avatar" />
    <h1 >{props.id}</h1>
<h1 >{props.name}</h1>
<p>{props.work}</p>
    </div>
    
    </>
    
    );
    
    }
