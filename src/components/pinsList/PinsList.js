import Pin from "../pin/Pin"
import './pinsList.css'
import {useEffect, useState} from 'react';









const PinsList = ({pins}) => {
    const url ='http://localhost:5000/pins';
    const [pines, setPines] = useState(undefined)
    const [pinName, setPinName] = useState();
    const [refresh, setRefresh] = useState(1);
    
    useEffect(() => {
        fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }    
        })
        .then((data)=>{
            let pinesUser = data.filter(function(e){
                return e.user===1;
            })
            setPines(pinesUser);

            
        })
        .catch((error) =>{
            console.error(error);
        });
    }, []);
    const body = {
        name: pinName,
      }
    const createPin= () => {
        fetch("http://localhost:5000/pins", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)     
        })
        .then((response) => response.json())
    .then((json) => setRefresh())
    .catch((err) => console.log(err));
  };
    



    return(
        <div>
            <p className="titlePins">Pins</p>
            <div className="pinsContainer">
                {pines && pines.map((pin) =>(
                    <Pin key ={pin.id} pin={pin} />
                ))}            
            </div>
            <form>
        <input onChange={(event) => setPinName(event.target.value)}></input>
        <button onClick={() => createPin()}>Create</button>
        </form>
        </div>

    )
}
export default PinsList;