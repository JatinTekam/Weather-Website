import "./Allweeks.css"
export const Allweeksbox=({week,pngImg})=>{
    // let data=Math.floor(Math.random()*8);
    // let d=pngImg[data].url;
    // console.log(d);
    
    return(
       <div className="alldata">
        <h1>{week}</h1>
        <div className="wimg">
         <img src={pngImg} alt={week} />
         {/* <p>{pngImg}</p> */}
        </div>
       </div>
    )
}