import { useState } from "react";
import "./LoginPage.css";

function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "arfaz" && password === "arfaz00") {
      onLoginSuccess();
    } else {
      setError("Invalid Admin Credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon-circle">🔐</div>
          <h2 className="login-title">Admin Portal</h2>
          <p className="login-subtitle">
            Sign in to manage students & teachers
          </p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label className="input-label">Username</label>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
