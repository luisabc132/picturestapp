import './pin.css';
function Pin({pin}){
    return(
        <div className="pinContainer">
            <img className="imagePin" alt="" src={pin.imgUrl}/>

           
            <div className="titlePinContainer"> 
            <p className="titleText">{pin.name}</p>

            </div>
        </div>
    )
}
export default Pin;