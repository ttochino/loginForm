import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  console.log("렌더링");
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/sign-form");
  };

  return (
    <div className="login">
      <table>
        <tr>
          <td>ID</td>
          <td><input
            type="email"
            id="email"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>< input
            type="password"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
          </td>
        </tr>
      </table>
      <div>
        <button>login</button>
        <button onClick={navigateToSignup}>sign up</button>
      </div>
    </div >
  );
}

