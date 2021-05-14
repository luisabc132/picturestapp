import './boardCard.css'
import {useState} from 'react'
const BoardCard= ({board}) => {
    const [show, setShow] = useState(false);
    return(
        <div className = "cardContainer" onMouseLeave = {()=>setShow(false)} onMouseEnter = {()=>setShow(true)}>
            <p className = "titleBoard">{board.name}</p>
            <p className = "numberPins">{board.numberOfpins} Pins</p>
           {show ? (
                <img className = "imgEdit" src = "https://riasdegalicia.com/wp-content/uploads/2021/05/Captura-de-pantalla-2021-05-11-a-las-23.41.50.png" />
            ): console.log('nada')
            }
             
          
             
           
            
        </div>
    )


}
export default BoardCard