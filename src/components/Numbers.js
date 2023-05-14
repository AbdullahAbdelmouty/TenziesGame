import Number from "./Number"
export default function Numbers(props){
    return(
        <div className="numbersContainer">
        <Number random={props.randomNum} Key={0} catch={props.catchNum} catchN ={props.catchN} setCathcN={props.setCathcN}/>
        <Number random={props.randomNum} Key={1} catch={props.catchNum} catchN ={props.catchN} setCathcN={props.setCathcN}/>
        <Number random={props.randomNum} Key={2} catch={props.catchNum} catchN ={props.catchN} setCathcN={props.setCathcN}/>
        <Number random={props.randomNum} Key={3} catch={props.catchNum} catchN ={props.catchN} setCathcN={props.setCathcN}/>
        <Number random={props.randomNum} Key={4} catch={props.catchNum} catchN ={props.catchN} setCathcN={props.setCathcN}/>
        <Number random={props.randomNum} Key={5} catch={props.catchNum} catchN ={props.catchN} setCathcN={props.setCathcN}/>
        <Number random={props.randomNum} Key={6} catch={props.catchNum} catchN ={props.catchN} setCathcN={props.setCathcN}/>
        <Number random={props.randomNum} Key={7} catch={props.catchNum} catchN ={props.catchN} setCathcN={props.setCathcN}/>
        <Number random={props.randomNum} Key={8} catch={props.catchNum} catchN ={props.catchN} setCathcN={props.setCathcN}/>
        <Number random={props.randomNum} Key={9} catch={props.catchNum} catchN ={props.catchN} setCathcN={props.setCathcN}/>
        </div>
    )
}