import { useState } from "react";
import { signUp, signIn, confirmSignUp } from "aws-amplify/auth";
import "./AuthPage.css";

const AuthPage = ({ onLogin }) => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      setError("");
      await signUp({
        username: email,
        password,
        options: { userAttributes: { email } },
      });
      setMode("verify");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    try {
      setLoading(true);
      setError("");
      await confirmSignUp({ username: email, confirmationCode: code });
      setMode("login");
      alert("Email verified! Please login.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      const user = await signIn({ username: email, password });
      onLogin(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">
          {mode === "login"
            ? "Login to Cartly"
            : mode === "signup"
              ? "Create Account"
              : "Verify Email"}
        </h2>

        {error && <p className="auth-error">{error}</p>}

        {mode !== "verify" && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />
          </>
        )}

        {mode === "verify" && (
          <input
            type="text"
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="auth-input"
          />
        )}

        <button
          onClick={
            mode === "login"
              ? handleLogin
              : mode === "signup"
                ? handleSignup
                : handleVerify
          }
          disabled={loading}
          className="auth-button"
        >
          {loading
            ? "Please wait..."
            : mode === "login"
              ? "Login"
              : mode === "signup"
                ? "Sign Up"
                : "Verify Email"}
        </button>

        {mode === "login" && (
          <p className="auth-switch">
            Don't have an account?{" "}
            <span onClick={() => setMode("signup")} className="auth-link">
              Sign Up
            </span>
          </p>
        )}

        {mode === "signup" && (
          <p className="auth-switch">
            Already have an account?{" "}
            <span onClick={() => setMode("login")} className="auth-link">
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
