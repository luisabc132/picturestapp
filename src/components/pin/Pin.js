import './pin.css';
function Pin({url,titlePin}){
    return(
        <div className="pinContainer">
            <img className="imagePin" src={url}/>

           
            <div className="titlePinContainer"> 
            <p className="titleText">{titlePin}</p>

            </div>
        </div>
    )
}
export default Pin;