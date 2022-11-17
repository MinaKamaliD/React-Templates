import "./Box.css";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Box() {
  return (
    <div>
      <div className="box">
        <div id="icon">
          <FontAwesomeIcon icon={faCalendar} />
        </div>

        <span>
          <p>Calandar</p>
        </span>
      </div>
    </div>
  );
}
export default Box;
