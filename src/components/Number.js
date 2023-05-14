export default function Number(props){
    // {props.catchN[props.Key].state? props.catchN[props.Key].text: props.random()}
    return(
        <div className="num"
        onClick={props.catch} 
        id={`${props.Key}`} 
        style={{backgroundColor: `${props.catchN[props.Key].state && "#59E391"}`}}>
            {props.catchN[props.Key].state? "ok": props.random()}
        </div>
    )
}