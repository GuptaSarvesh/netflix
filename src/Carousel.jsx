import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 


function Carousel(){
return(
<>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://wallpapercave.com/wp/wp8637980.jpg" alt="First slide" />
    
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://wallpapercave.com/wp/wp7785360.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://wallpapercave.com/wp/wp6076117.jpg" alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://wallpapercave.com/wp/wp5344519.jpg" alt="Fourth slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://wallpapercave.com/wp/wp6749393.jpg" alt="Fifth slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://wallpapercave.com/wp/wp6527850.jpg" alt="Sixth slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://occ-0-4823-1007.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZ_4ebTD9AAAZThywEPI1PsQkDCNjzMg7RzlgyqWPUy8J0BO4h6QhYUuXQcXZjQQH5xDa0JpJMos9tV01DlU2rkFXd19.jpg?r=e3e" alt="Seventh slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
</div>

</>
);
}



export default Carousel;
