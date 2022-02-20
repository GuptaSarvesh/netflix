import React, { useState } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

const Contact_Spread=()=>{
  
  //This example is without spread operator


  //set Last name using this
  //const[LName,setLname]=useState("");
  //const[myLName,setMyLname]=useState("");

  //Set First Name using this 
  //const[name,setName]=useState("");
  //const[myName,setMyname]=useState("");

  const[fullname,setFullName]=useState({
    fname:"",
    lname:"",
    password:"",
    mobile:"",
  });

  const onSubmit=(event)=>{
    event.preventDefault();
    alert('form submitted');
  }
  const inputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
    const {value,name}=event.target;

    setFullName((prevValue)=>{
    console.log(prevValue);

    return{
        ...prevValue,
        [name]: value,
    }
    //   if(name==="fname"){
    //     return{
    //     fname:value,
    //     lname:prevValue.lname,
    //     password:prevValue.password,
    //     mobile:prevValue.mobile,
    //   };
    // }

    //  else if(name==="lname"){
    //   return{
    //     fname:prevValue.fname,
    //     lname:value,
    //     password:prevValue.password,
    //     mobile:prevValue.mobile,
    //   };
    // }

    
    // else if(name==="password"){
    //   return{
    //     fname:prevValue.fname,
    //     lname:prevValue.lname,
    //     password:value,
    //     mobile:prevValue.mobile,
    //   };
    // }
    
    
    // else if(name==="mobile"){
    //   return{
    //     fname:prevValue.fname,
    //     lname:prevValue.lname,
    //     password:prevValue.password,
    //     mobile:value,
    //   };
    // }

    });
    //setName(event.target.value);
  }

  //const inputEventTwo=(event)=>{
    //console.log(event.target.value);
    //setLname(event.target.value);
  //}

return(
<>
<div className="ipForm">
<div>
<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.7826598810468!2d75.79012082916856!3d26.867590195283842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzAzLjMiTiA3NcKwNDcnMjYuNCJF!5e0!3m2!1sen!2sin!4v1629721948715!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
</div>

<div className="ipForm1">
<form onSubmit={onSubmit}>
  <h1 style={{color:'white'}}>Hello {fullname.fname} {fullname.lname} 
  <span> {fullname.password}</span>
  <span> {fullname.mobile} </span> </h1>
  <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or username"
    name="fname"
    onChange={inputEvent} value={fullname.fname}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Last Name</label>
    <input type="text" class="form-control" 
    id="exampleInputPassword1" 
    placeholder="Password" 
    name="lname" onChange={inputEvent} value={fullname.lname}/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" class="form-control" 
    id="exampleInputPassword1" 
    placeholder="Password" 
    name="password" onChange={inputEvent} value={fullname.password}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Mobile</label>
    <input type="number" class="form-control" 
    id="exampleInputPassword1" 
    placeholder="Password" 
    name="mobile" onChange={inputEvent} value={fullname.mobile}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</>

);

}

export default Contact_Spread;