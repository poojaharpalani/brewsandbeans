import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <button onClick={() => handleLogin("admin")}>
        Login as Admin
      </button>

      <button onClick={() => handleLogin("user")}>
        Login as User
      </button>

      <style>{`
        .login-container {
          max-width: 400px;
          margin: 80px auto;
          padding: 30px;
          text-align: center;
          font-family: system-ui, sans-serif;
        }

        button {
          display: block;
          width: 100%;
          padding: 12px;
          margin: 12px 0;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }

        button:first-of-type {
          background: #a64b2a;
          color: white;
        }

        button:last-of-type {
          background: #232323;
          color: white;
        }

        button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}