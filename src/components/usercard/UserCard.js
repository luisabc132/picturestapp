import './usercard.css'
const UserCard =  (props) => {
    return(
        <div className="userCardContainer">
            <img src="https://riasdegalicia.com/wp-content/uploads/2021/05/User-Avatar2.png"/>
            <p className="userName">{props.name}</p>
            <p className="userApp">{props.userName}</p>
            <p className="userFollowing">{props.folow} following</p>

        </div>

    )
}
export default UserCard;


