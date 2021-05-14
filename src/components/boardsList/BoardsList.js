import BoardCard from "../boardCard/BoardCard"
import './boardsList.css'

const BoardList = () => {
    return(
        <div>
            <p className="title">Boards</p>
            <div className="boardsContainer">
                <BoardCard title="All pins" many= "512" />
                <BoardCard title="Board 2" many= "23" />
                <BoardCard title="Board of plants" many= "12" />
                <BoardCard title="Board of food" many= "51" />
                <BoardCard title="Amazin board" many= "0" />
                <BoardCard title="Quick saves" many= "1" />
            </div>
        </div>

    )
}
export default BoardList;