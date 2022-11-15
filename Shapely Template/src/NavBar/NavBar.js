import "./NavBar.css";
import {
  faChevronDown,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <header>
          <a href="#">Shapely Demo</a>
        </header>
        <div className="links">
          <div>
            <i class="fa fa-car"></i>
            <a href="#" className="navlinks">
              <i class="fa fa-car"></i>
              HOME
            </a>
            <a href="#" className="navlinks">
              BLOG
            </a>
            <a href="#" className="navlinks">
              PORTFOLIO
            </a>
            <a href="#" className="navlinks">
              {"ABOUT THE TESTS           "}
              <FontAwesomeIcon
                style={{
                  fontSize: "7px",
                  paddingLeft: "5px",
                  paddingBottom: "2px",
                }}
                icon={faChevronDown}
              />
            </a>
            <a href="#" className="navlinks">
              {"LEVEL1     "}
              <FontAwesomeIcon
                style={{
                  fontSize: "7px",
                  paddingLeft: "5px",
                  paddingBottom: "2px",
                }}
                icon={faChevronDown}
              />
            </a>
            <a href="#" className="navlinks">
              SHOP
            </a>
            <a href="#" id="search">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
