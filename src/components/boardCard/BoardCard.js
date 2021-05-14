import './boardCard.css'
const BoardCard= ({title,many}) => {
    return(
        <div className = "cardContainer">
            <p className = "titleBoard">{title}</p>
            <p className = "numberPins">{many} Pins</p>
            <img className = "imgEdit" src = "https://riasdegalicia.com/wp-content/uploads/2021/05/Captura-de-pantalla-2021-05-11-a-las-23.41.50.png" />
            
        </div>
    )


}
export default BoardCard