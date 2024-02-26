import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  //   console.log("header render");
  // if no dependency array the callback function called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
  //   useEffect(() => {
  //     console.log("useeffect called");
  //   }, [btnNameReact]);
  return (
    <div>
      <ul>
        <li> <Link to="/">Home</Link></li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li> <Link to="/contact">contact</Link></li>

        <li><Link to="/services">Services</Link></li>

        <li><Link to="/Registrationform">Registrationform</Link></li>
        <button
          className="btn"
          onClick={() => {
            btnNameReact === "Login"
              ? setbtnNameReact("Logout")
              : setbtnNameReact("Login");
          }}
        >
          {btnNameReact}{" "}
        </button>
      </ul>
    </div>
  );
}

export default Header;
