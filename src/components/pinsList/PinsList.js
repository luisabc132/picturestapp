import Pin from "../pin/Pin"
import './pinsList.css'



const PinsList = ({pins}) => {
    return(
        <div>
            <p className="titlePins">Pins</p>
            <div className="pinsContainer">
                {pins.map((pin) =>(
                    <Pin key ={pin.name} pin={pin} />

                ))}
                {/* <Pin url="https://riasdegalicia.com/wp-content/uploads/2021/05/image-2.png" titlePin="Receta Familiar"/>
                <Pin url="https://riasdegalicia.com/wp-content/uploads/2021/05/image-3.png" titlePin="Puerta Inglesa"/>
                <Pin url="https://riasdegalicia.com/wp-content/uploads/2021/05/image-4.png" titlePin=""/>
                <Pin url="https://riasdegalicia.com/wp-content/uploads/2021/05/image-5.png" titlePin="Azul"/>
                <Pin url="https://riasdegalicia.com/wp-content/uploads/2021/05/image-6.png" titlePin=""/>
                <Pin url="https://riasdegalicia.com/wp-content/uploads/2021/05/image-2.png" titlePin="Receta Familiar"/>
                <Pin url="https://riasdegalicia.com/wp-content/uploads/2021/05/image-3.png" titlePin="Puerta Inglesa"/>
                <Pin url="https://riasdegalicia.com/wp-content/uploads/2021/05/image-4.png" titlePin=""/>
                <Pin url="https://riasdegalicia.com/wp-content/uploads/2021/05/image-5.png" titlePin="Azul"/>
                <Pin url="https://riasdegalicia.com/wp-content/uploads/2021/05/image-6.png" titlePin=""/> */}


                
            </div>
        </div>

    )
}
export default PinsList;