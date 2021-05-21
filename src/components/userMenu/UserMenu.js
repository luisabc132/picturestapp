import './userMenu.css'
import '../dropDown/dropDown.css'
import { useState } from 'react';
import DropDown from '../dropDown/DropDown';



function UserMenu(){
    const[showMenu, setShowMenu]  = useState(false);
    function Setea(){
       
        if (setShowMenu()){
            
            setShowMenu(!showMenu);
        }   
        else{
            
            setShowMenu(!showMenu);
        }
        
    }
    return(
        <div>
        <div className="userMenuContainer">
            <img className="imgProfile" alt="" src="https://riasdegalicia.com/wp-content/uploads/2021/05/User-Avatar.png" />
            <p onClick = {() => Setea()}  className="arrowContainer">⌄</p>
           
        </div>
        {showMenu ? (
            <div className="optionUser">
            <DropDown  />
            </div>
        ): undefined
        }
        </div>
    )
}
export default UserMenu