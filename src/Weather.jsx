import { useEffect, useState } from "react";
import "./weather.css"
import { IoSearchOutline } from "react-icons/io5";

import { IoSunny } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { Allotherdata} from "./Allotherdata";
import { Weathericon } from "./Weathericon";
import { Tempicon } from "./Tempicon";
const Weather = () => {
const[name,setName]=useState("");
const[loading,setLoading]=useState(true);
const[apiData,setApiData]=useState(null);
const[error,setError]=useState(null);
const[mode,setMode]=useState(true);




let API=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai&APPID=ac402302d123399daceb36974bdf9240`;

// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//   const month=["January","February","March","April","May","June","July","August","September","October","November","December"];
 
//   const day=new Date();
//   const currentDate=weekday[day.getDay()];
//   const date=day.getDate();
//   const year=month[day.getMonth()];

const getapiData= async ()=>{
  try {
    const data=await fetch(API);
    const res= await data.json();
    setApiData(res);
    console.log(res);
    
    setLoading(false);
    
    
  } catch (error) {
    setError(error);
    setLoading(false);
  }  
  
}



useEffect(()=>{
  getapiData();
},[])

const handleFormSubmit=(e)=>{
  e.preventDefault();
  if(name==""){
   return alert("Please Enter City");
  }
  
  API=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${name}&APPID=ac402302d123399daceb36974bdf9240`;

  getapiData();

  setName("");
  
}

if(loading){
return(
  <div className="error">
    <h1>Loading...</h1>
  </div>
)
}
  

  if(error){
    return(
      <div className="error">
      <h1>{error.message}</h1>
      </div>
    )
  }
   
  const handleNightMode=()=>{
      setMode(!mode);
  }
   
  return (
    <form onSubmit={handleFormSubmit} className={mode ? "light" : "dark"}>
      <div className="inputdata">
      <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} className={mode ? "light" : "dark"}/>
      <button type="submit"><IoSearchOutline/></button>
      <div className="btn" onClick={handleNightMode}>{mode ? <IoSunny /> : <IoSunnyOutline />}</div>
      </div>
     <Tempicon  iconTemp={apiData}/>
      <Weathericon iconData={apiData}/>
      <div className="otherdata">
       <Allotherdata allInfo={apiData}/>
      </div>
    </form>
  )
};

export default Weather;
