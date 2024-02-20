import "./index.css"
const Header = ()=>{
    return(
        <nav className="nav-bar">
            <div className="img-container">
                <img src="https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="nav-img" alt="nav-img"/>
            </div>
            <ul className="nav-items-container">
                <li className="nav-items">Emotions</li>
                <li className="nav-items">Manifesto</li>
                <li className="nav-items">Self-awareness test</li>
                <li className="nav-items">Work with Us</li>
            </ul>
            <div className="download-app-container">
                <button type="button" className="download-button">Download Now</button>
            </div>
        </nav>
    )
}
export default Header 