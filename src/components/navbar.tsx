import { Link } from "react-router"

export default function Navbar() {

   return(
    <div className="navbar">
        <div className="left">
            <div className="nav-item">
                <Link to={"/gallery"}>Gallery</Link>
            </div>
            <div className="nav-item">
                <Link to={"/panoramas"}>Panoramas</Link>
            </div>
        </div>
        <div className="center">
            <span className="line"></span>
            <div className="nav-item">
                <Link to={"/"}>Home</Link>
            </div>
            <span className="line"></span>
        </div>
        <div className="right">
            <div className="nav-item">
                <Link to={"/gear"}>Gear</Link>
            </div>
            <div className="nav-item">
                <Link to={"/journal"}>Journal</Link>
            </div>
            {/* <div className="nav-item">
                <Link to={"/contact"}>Contact</Link>
            </div> */}
        </div>
    </div>
   )
}