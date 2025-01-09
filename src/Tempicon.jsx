import "./weather.css"
export const Tempicon=({iconTemp})=>{
    return(
         <figure>
               {
                iconTemp.cod==200 ?  <figcaption>{iconTemp.name}</figcaption> :  <figcaption>--</figcaption>
               }
                {
                  iconTemp.cod==200 ? <img src={`https://flagsapi.com/${iconTemp.sys.country}/flat/64.png`} alt="" /> : <h2>--</h2>
                }
              </figure>
    )
}