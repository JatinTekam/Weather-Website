import { useEffect, useState } from "react";
import "./weather.css"
import { Allweeksbox } from "./Allweeksbox";
import { FaArrowRight } from "react-icons/fa6";
const Weather = () => {
const[name,setName]=useState("");
const[loading,setLoading]=useState(true);
const[apiData,setApiData]=useState(null);
const[error,setError]=useState(null);
const[data,setData]=useState(true);
const[img,setImages]=useState([
  {
    url:"https://cdn-icons-png.flaticon.com/512/869/869869.png"
  },
  {
    url:"https://cdn-icons-png.flaticon.com/512/3093/3093390.png"
  },
  {
    url:"https://cdn-icons-png.flaticon.com/512/4088/4088981.png"
  },
  {
    url:"https://cdn-icons-png.flaticon.com/512/4088/4088981.png "
  },
  {
    url:"https://cdn-icons-png.flaticon.com/512/1146/1146860.png "
  },
  {
    url:"https://cdn-icons-png.flaticon.com/512/6229/6229820.png"
  },
  {
    url:"https://cdn-icons-png.flaticon.com/512/642/642000.png "
  }
])



let API=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai?unitGroup=us&key=KTVUTW73Z3HCTDZDZDCA7GWTQ`;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month=["January","February","March","April","May","June","July","August","September","October","November","December"];
 
  const day=new Date();
  const currentDate=weekday[day.getDay()];
  const date=day.getDate();
  const year=month[day.getMonth()];

const getapiData= async ()=>{
  try {
    const data=await fetch(API);
    const res= await data.json();
    setApiData(res);
    setLoading(false);
    
    
  } catch (error) {
    setError(error);
    setLoading(false);
  }  
  
}



useEffect(()=>{
  getapiData();
},[])

const handleApiData=(e)=>{
  e.preventDefault();
  const name1=name.charAt(0).toUpperCase()+name.slice(1);
  setName(name1);
  API=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name1}?unitGroup=us&key=KTVUTW73Z3HCTDZDZDCA7GWTQ`
  getapiData();
  
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

  return (
    <div className="weather">
        <div className="inputdata">
            <input type="text" placeholder="Enter City" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handleApiData}>Enter <span><FaArrowRight/></span></button>
        </div>
        <div className="allinfo">
            <div className="container">
              <div className="box1">
                <h1>{apiData.resolvedAddress}</h1>
                <p>{currentDate+" "+date+" "+year}</p>
                <div className="tempdata">
                  {data?<h3>{apiData.days[0].solarenergy}°C</h3>:<h3>--</h3>}
                  <p>{apiData.description}</p>
                </div>
              </div>
              <div className="box2">
                      <div className="row1">
                        <p>High:- <span>{apiData.days[0].dew}°C</span></p>
                        <p>Wind:- <span>{apiData.days[0].windspeed}mph</span></p>
                        <p>Sunrise:- <span>{apiData.days[0].sunrise}</span></p>
                      </div>
                      <div className="row2">
                        <p>Min:- <span>{apiData.days[0].windgust}°C</span></p>
                        <p>Humidity:- <span>{apiData.days[0].humidity}</span></p>
                        <p>Sunset:- <span>{apiData.days[0].sunset}</span></p>
                      </div>
              </div>
            </div>
            <div className="allweeks">
              {
                weekday.map((data,index)=>{
                  return  <Allweeksbox week={data} key={index} pngImg={img[index].url}/>
                })
              }
            </div>
        </div>

    </div>
  )
};

export default Weather;
