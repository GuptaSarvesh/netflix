//components is react learning code

import React from 'react';
import ReactDOM from 'react-dom';
import App,{Shows,Hooks,Eve} from './App';
import data from './CardData';
import Carousel from './Carousel';
import './index.css';
import Footer from './Footer';
import Contact from './Contact';
import Contact_Spread from './Contact_Spredoperator';

import 'bootstrap/dist/css/bootstrap.min.css';


/*
function shows(){
return(

    <ShowCard 
    imgsrc={val.imgsrc} 
    title={val.title} 
    name={val.name} 
    link={val.link} />

);

}
*/
ReactDOM.render(
<>

<div className="container-fluid"> <App /> </div>


 <Carousel /> 
<div className="container-fluid "> 
{/* <div className="row"> <Shows/>  </div> */}
 <div className="row" style={{paddingBottom:80}}> {data.map(Shows)}  </div>  
{/* <div className="row"> <Hooks/>  </div>  */}

</div>

{/* <Contact_Spread /> */}
 <Footer />
 
 
</>,
document.getElementById("root")
);