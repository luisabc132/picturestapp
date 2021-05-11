import Button from '../button/Buttom'
import Logo from '../logo/Logo'
import UserMenu from '../userMenu/UserMenu'
import './header.css'
function Header(){
    return(
        <div className="headerContainer">
            <div className="headerFirt">
                <Logo />
                <Button text = "Hola"/>
            </div>    
            <div className="headerSecond">
                <UserMenu />
            </div>
            
        </div>
       
    )
}
export default Header


