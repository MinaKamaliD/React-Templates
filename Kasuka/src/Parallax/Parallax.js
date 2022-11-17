import "./Parallax.css";
import NavBar from "../NavBar/NavBar";
import Box from "../Box/Box";

function Parallax() {
  return (
    <div>
      <div className="parallax">
        <NavBar></NavBar>
        <Box></Box>
      </div>
    </div>
  );
}

export default Parallax;
