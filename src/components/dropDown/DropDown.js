import './dropDown.css'
const DropDown = () =>{
    return(
        <div className="dropDownContainer">
            <div class='option' id='option1'>Update profile</div>
			<div class='option' id='option2'>My Boards</div>
			<div class='option' id='option3'>My pins</div>
			<div class='option' id='option4'>Log out</div>
        </div>

    )
}
export default DropDown;