import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 

function ShowCard (props){
  
  let name="watch";

  let newTime=new Date().toLocaleTimeString();
  
  const state= useState();
  //console.log(state);
  const[names,setName]=useState(name);
  const [count,setCount]=useState(0);
  const IncNum=()=>{
    setCount(count+1);
  const newName="Watched";
  setName(newName);
    
  }
  
  const [curtime,settime]=useState(newTime);
  const updateTime=()=>{
    newTime=new Date().toLocaleTimeString();
    settime(newTime);

  }

  function allFunc(){
    //with the help of this function named   allFunc we can use multiple function on a click operatio. jitne bhe function iss allFunc m honge sab chalenge 
    updateTime();
    IncNum();
  }
  

  return(

<>



<div className="area">
<div className="card cards">
<div className="card_1">
  <img className="card-img-top" src={props.imgsrc} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.name}</p>
    <div style={{display:'grid'}}>
    <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-primary btns" onClick={allFunc} >{names}</a>
    <span> Users who watched this : {count} <br/>
     Last updated : {curtime} </span>
    </div>
    
    
  
  </div>
</div>
</div>
</div>


</>    
);
}

export default ShowCard;



