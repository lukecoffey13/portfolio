import "./topBar.scss";
//import Person from '@mui/icons-material/Person';
//import Mail from '@mui/icons-material/Email';

export default function TopBar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topBar " + (menuOpen && "active")} id="topBar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="item-container">
            <span>
              +61 413 980 442
            </span>
          </div>
          <div className="item-container">
            <span>
              luke.m.coffey@gmail.com
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}