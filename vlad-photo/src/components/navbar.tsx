
export default function Navbar() {

   return(
    <div className="navbar">
        <div className="left">
            <div className="nav-item">Photos</div>
            <div className="nav-item">Panoramas</div>
        </div>
        <div className="center">
            <span className="line"></span>
            <div className="nav-item">Home</div>
            <span className="line"></span>
        </div>
        <div className="right">
            <div className="nav-item">About me</div>
            <div className="nav-item">Find me here</div>
        </div>
    </div>
   )
}