import "./Ceo.css";
import { FaDatabase } from "react-icons/fa";

function Ceo() {
  return (
    <div className="ceo">
      <div className="container">
        <h2>
          <FaDatabase />
          Staxx
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
          assumenda facilis labore reprehenderit aut iste suscipit, amet
          exercitationem voluptate sed quaerat? Amet incidunt voluptatibus
          laboriosam id consequuntur nihil aspernatur perferendis.
        </p>
        <strong>Marie Chilvers</strong>
        <strong>CEO,Staxx</strong>
        <div className="images"></div>
      </div>
    </div>
  );
}

export default Ceo;
