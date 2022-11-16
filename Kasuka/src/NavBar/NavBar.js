import "./NavBar.css";

function NavBar() {
  return (
    <div>
      {/* <img src="p.png" alt="" /> */}

      <div className="nav">
        <div className="header">
          <img src="../img/lego.svg" className="icon" />
          <a href="">KASUKA</a>
        </div>
        <div className="links">
          <a href="" className="navlinks">
            Home
          </a>
          <a href="" className="navlinks">
            About
          </a>
          <a href="" className="navlinks">
            Services
          </a>
          <a href="" className="navlinks">
            Products
          </a>
          <a href="" className="navlinks">
            Contact
          </a>
        </div>

        <div className="btn">
          <button id="start">Start</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
