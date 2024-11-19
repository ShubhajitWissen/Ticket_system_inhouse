import { useEffect, useState } from "react";
import "./Login.css"; // Import the CSS for styling
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [isLoginPage, setIsLoginPage] = useState(true);
  const token = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  function resetForm() {
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
  }

  function handleTogglePage() {
    resetForm();
    setIsLoginPage((prev) => !prev);
  }

  useEffect(() => {
    if (!!token) {
      navigate("/tickets");
    }
  }, [token]);

  async function SignUp(userInfo) {
    const body = JSON.stringify(userInfo);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "access-control-allow-credentials": "true",
          "content-length": "120",
        },
        body: body,
      });

      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  }

  async function SignIn(userInfo) {
    try {
      // Convert userInfo object to URL-encoded format
      const urlEncodedData = new URLSearchParams(userInfo).toString();

      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData, // Send as URL-encoded string
      });

      const data = await response.json(); // Parse the response as JSON
      console.log(data);
      if (data.detail === "Incorrect username or password") {
        throw new Error("User is not valid");
      }
      const { access_token, token_type } = data;
      localStorage.setItem(
        "token",
        JSON.stringify(`${token_type} ${access_token}`)
      );
      const userResponse = await fetch("http://127.0.0.1:8000/api/user/me", {
        method: "GET",
        headers: {
          // "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `${token_type} ${access_token}`,
        },
      });
      const userData = await userResponse.json();
      console.log(userData);
      localStorage.setItem("userDetail", JSON.stringify(userData));

      navigate("/tickets");
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogin() {
    if (isLoginPage) {
      if (username && password) {
        let userInfo = {
          username,
          password,
        };
        SignIn(userInfo);
      } else {
        alert("Please fill all fields.");
      }
    } else {
      if (email && password && username && role) {
        let userInfo = {
          email,
          password,
          username,
          role,
          tickets: [],
        };
        SignUp(userInfo);
        setIsLoginPage(true);
      } else {
        alert("Please fill all fields");
      }
    }
  }
  return (
    <div className="login-page">
      {/* Left Section with Image */}
      <div className="login-left">
        <div className="overlay-content">
          <h1>WAione</h1>
          <p>by Wissen | Driving Digital Transformation</p>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="login-right">
        <div className="login-form-container">
          <h2>{isLoginPage ? "Login to Wissen" : "Sign up to Wissen"}</h2>
          {isLoginPage && <p>Welcome back! Please enter your details.</p>}

          {/* Name Input */}

          <label htmlFor="name">
            Username <span>*</span>
          </label>
          <div className="input-container">
            <input
              type="text"
              id="name"
              placeholder="e.g Tushar"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email Input */}
          {!isLoginPage && (
            <>
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  placeholder="info@wisseninfotech.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </>
          )}
          {!isLoginPage && (
            <>
              <label htmlFor="role">
                Role <span>*</span>
              </label>
              <div className="input-container">
                <select
                  id="role"
                  defaultValue={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
            </>
          )}

          {/* Password Input */}
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <div className="input-container">
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign In Button */}
          <button className="login-btn" onClick={handleLogin}>
            {isLoginPage ? "Sign In" : "Sign up"}
          </button>

          {/* Sign Up Option */}
          <p className="signup-option">
            Dont have an account?{" "}
            <a onClick={handleTogglePage} style={{ cursor: "pointer" }}>
              {isLoginPage ? "Sign Up" : "Log in "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
