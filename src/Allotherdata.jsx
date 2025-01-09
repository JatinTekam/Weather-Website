import { LuWind } from "react-icons/lu";
import { FaGauge } from "react-icons/fa6";
import { IoCloudSharp } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import "./weather.css"

export const Allotherdata=({allInfo})=>{
    return(
        <>
        <ul>
        <li>Clouds <IoCloudSharp/> :- {allInfo.cod==200 ? <span>{allInfo.clouds.all}%</span> : <span>--</span>}</li>
        <li>Windspeed <LuWind />:-{allInfo.cod==200 ? <span>{allInfo.wind.speed}m/h</span> : <span>--</span>}</li>
        <li>Pressure <FaGauge /> :- {allInfo.cod==200 ? <span>{allInfo.main.pressure}atm</span> : <span>--</span>}</li>
        </ul>
        <ul>
        <li>Humidity <WiHumidity /> :- {allInfo.cod==200 ? <span>{allInfo.main.humidity}%</span> : <span>--</span>}</li>
        <li>Max Temp <FaTemperatureArrowUp /> :-{allInfo.cod==200 ? <span>{allInfo.main.temp_max}°C</span> : <span>--</span>}</li>
        <li>Min Temp <FaTemperatureArrowDown /> :-{allInfo.cod==200 ? <span>{allInfo.main.temp_min}°C</span> : <span>--</span>} </li>
        </ul>
        </>
    )
}