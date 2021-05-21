import { useEffect, useState } from "react"
import BoardCard from "../boardCard/BoardCard"
import './boardsList.css'

const BoardList = ({boards},{idUser}) => {
    const url = 'http://localhost:5000/boards'
    const [tableros, setTableros] = useState(undefined);
    useEffect(()=>{
        fetch(url)
        .then ((response)=> {
            if (response.ok){
                return response.json()
            }else{
                throw Error(response.statusText);

            }

        })
        .then((data)=>{
            let boardUser = data.filter(function(e){
                return e.author === 1;

            });
            setTableros(boardUser);
        })
        .catch((error) => {
            console.error(error)
        });

    }, []);





    return(
        <div>
            <p className="title">Boards</p>
            <div className="boardsContainer">
                {tableros && tableros.map((board) => (
                    <BoardCard key={board.id} board = {board} />
                ))}
                {/* <BoardCard title="All pins" many= "512" />
                <BoardCard title="Board 2" many= "23" />
                <BoardCard title="Board of plants" many= "12" />
                <BoardCard title="Board of food" many= "51" />
                <BoardCard title="Amazin board" many= "0" />
                <BoardCard title="Quick saves" many= "1" /> */}
            </div>
        </div>

    )
}
export default BoardList;