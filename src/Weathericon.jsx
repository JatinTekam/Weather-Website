import "./weather.css"
export const Weathericon=({iconData})=>{
    return(
        <div className="weathericon">
        {
          iconData.cod==200 ? <img src={`https://openweathermap.org/img/wn/${iconData.weather[0].icon}@4x.png`} alt="" /> : <h1>{iconData.cod}</h1>
        }
        {
          iconData.cod==200 ? <h1>{iconData.main.temp}°C</h1> : <h2>{iconData.message}</h2>
        }
        {
          iconData.cod==200 ? <p>{iconData.weather[0].main}</p> : <h2>--</h2>
        }
      </div>
    )
}