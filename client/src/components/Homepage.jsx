import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  // State variables for admin and user codes
  const [adminCode, setAdminCode] = useState("");
  const [userCode, setUserCode] = useState("");

  // State variables for error messages
  const [adminError, setAdminError] = useState("");
  const [userError, setUserError] = useState("");

  const authenticateCode = async (isAdmin) => {
    try {
      const response = await fetch("http://localhost:8000/rest/v1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: isAdmin ? adminCode : userCode }),
      });

      const res = await response.json();
      if (res.status === "error") {
        if (isAdmin) {
          setAdminError("Error authenticating admin code");
          setUserError(""); // Clear user error
        } else {
          setUserError("Error authenticating user code");
          setAdminError(""); // Clear admin error
        }
        return;
      }
      navigate(res.redirect);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Code Authentication System</h1>
      <div>
        <label>
          Enter Code for admin:
          <input
            type="text"
            value={adminCode}
            onChange={(e) => setAdminCode(e.target.value)}
          />
        </label>
        <button onClick={() => authenticateCode(true)}>Authenticate</button>
        <div className="error-message">{adminError}</div>
      </div>
      <div>
        <label>
          Enter Code for user:
          <input
            type="text"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
          />
        </label>
        <button onClick={() => authenticateCode(false)}>Authenticate</button>
        <div className="error-message">{userError}</div>
      </div>
    </div>
  );
};

export default Homepage;
