import { Link } from "react-router-dom";

const Navbar = ({isLoggedIn, onLogout}) => {
    
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <br />
            <Link to="/cart">Cart</Link>
            <br />
            {
                isLoggedIn ? (
                    <button onClick={onLogout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )
            }
        </nav>
    );
}
export default Navbar;