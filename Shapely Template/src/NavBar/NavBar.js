import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <header>
          <a href="#">Shapely Demo</a>
        </header>

        <div>
          <a href="#" className="navlinks">
            HOME
          </a>
          <a href="#" className="navlinks">
            BLOG
          </a>
          <a href="#" className="navlinks">
            PORTFOLIO
          </a>
          <a href="#" className="navlinks">
            ABOUT THE TESTS &#957;
          </a>
          <a href="#" className="navlinks">
            LEVEL1 &#957;
          </a>
          <a href="#" className="navlinks">
            SHOP
          </a>
          <a href="#" id="search">
            &#9740;
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
