import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/cart">Cart</Link>
    </nav>
);

export default Navbar;