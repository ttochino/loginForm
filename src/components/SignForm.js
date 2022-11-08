import { useState } from "react";

export default function SignForm(props) {
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
        <tr>
          <td>Confirm</td>
          <td>< input
            type="checkbox"
            onChange={handleChange}
          />
          </td>
        </tr>
        <tr>
          <td>Role</td>
          <td><select>
            <option value="0">Admin</option>
            <option value="1">User</option></select>
          </td>
        </tr>
      </table>
      <div>
        <button type="submit">login</button>
        <button link="">sign up</button>
      </div>
    </div >
  );
}

