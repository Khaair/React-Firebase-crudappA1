import { useState,useEffect } from "react";
import UserDataService from "../services/user.services"


 function Form({id,setUserId}) {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [address ,setAddress]=useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newBook = {
      name,
      email,
      address
    };
    console.log(newBook);

    try {
    
      if (id !== undefined && id !== "") {
        await UserDataService.updateUser(id, newBook);
        setUserId("");
      } else {
        await UserDataService.addUsers(newBook);
      }

      
    } catch (err) {
      console.log(err)
    }

  
  };  


  const editHandler = async () => {
    try {
      const docSnap = await UserDataService.getUser(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setEmail(docSnap.data().email);
      setAddress(docSnap.data().address);
    } catch (err) {
    }
  };


  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return(
    <div className='container'>
    <form action="">
    <div className="form-group mt-5 ">
    <label htmlFor="">Enter Name</label>
    <input className="form-control" value={name} onChange={(e)=>setName(e.target.value)} style={{margin:"12px"}} placeholder="Enter name"/>
    </div>
    <div className="form-group mt-5 ">
    <label htmlFor="">Enter Email</label>
        <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}  style={{margin:"12px"}} placeholder="Enter email"/>
        </div>
        <div className="form-group mt-5 ">
    <label htmlFor="">Enter Address</label>
        <input className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)} style={{margin:"12px"}} placeholder="Enter address"/>
        </div>
        <button className="btn btn-primary mt-3" type="button" onClick={handleSubmit} >Save</button>
    </form>

    </div>
  )
}

export default Form