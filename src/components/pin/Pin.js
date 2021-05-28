import { useState } from 'react';
import './pin.css';



function Pin({pin}){
    
    const[showPin, setShowPin] = useState(false)
    return(
      
        <div className="pinContainer" onMouseEnter={()=>setShowPin(true)} onMouseLeave={()=>setShowPin(false)}>
            <img className="imagePin" alt="" src={pin.imgUrl}/>
            {showPin ? (
            <div className="linkOfPinContainer">
                {pin.url != null &&
                <p className="linkOfPin">
                    <a href={pin.url}>{pin.url.slice(0,13)}</a>
                </p>
                }
            </div>
            ):undefined
            }
            
            {/* console.log{pin.imgUrl} */}

           
            <div className="titlePinContainer"> 
            <p className="titleText">{pin.name}</p>

            </div>
        </div>
    )
}
export default Pin;



