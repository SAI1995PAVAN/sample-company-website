import "./Description.css";
import {
  FaDatabase,
  FaAccusoft,
  FaAsterisk,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Description() {
  return (
    <div className="description">
      <div className="container">
        <div className="details">
          <h1>Data to enrich your</h1>
          <h1>
            <span className="primary">online bussiness</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            quae delectus? Ex laborum voluptate maiores ullam velit placeat
            eius, qui vel praesentium, perspiciatis pariatur iusto corporis
            itaque. Sint, iste amet.
          </p>
          <div className="used-by">
            <h2>USED BY</h2>
          </div>
          <div>
            <i>
              <FaDatabase />
              Staxx
            </i>
            
            <i>
               <FaAsterisk />
               Star AI
            </i>
            <i>
              <FaAccusoft />
              Accusoft
            </i>
          </div>
        </div>
        <div className="details-form">
          <div className="form-layout">
            <div className="form-container">
              <p id="signin">Sign in with</p>
              <div className="social-icons">
                <button >
                  {" "}
                  <i>
                    <FaFacebook size={30} />
                  </i>
                </button>
                <button>
                  <i>
                    <FaTwitter size={30} />
                  </i>
                </button>
                <button>
                  {" "}
                  <i>
                    <FaGithub size={30} />
                  </i>
                </button>
              </div>
              <div id="or">
                <p>
                  <span>Or</span>
                </p>
              </div>
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button className='button'>Create your account</button>
              </form>
            </div>
          </div>
          <div className="form-footer">
            <p>
              By signing up,you agree to our
              <a href="terms"> Terms</a>,<a href="data"> Data Policy </a>and
              <a href="cookies"> Cookies Policy.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
