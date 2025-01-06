import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
         <h1>Navbar</h1>   
         <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/Contact"}>Contact</Link>
            <Link to={"/usres"}>Users</Link>
            
            
          
         </nav>
        </div>
    );
};

export default Header;