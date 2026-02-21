import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function ProfileMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-wrapper">
      <div
        className="profile-icon"
        onClick={() => setOpen(!open)}
      >
        {user?.name?.charAt(0).toUpperCase()}
      </div>

      {open && (
        <div className="dropdown">
          <p className="username">{user?.name}</p>
          <p className="role">{user?.role}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}

      <style>{`
        .profile-wrapper {
          position: relative;
          display: inline-block;
        }

        .profile-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #a64b2a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          cursor: pointer;
        }

        .dropdown {
          position: absolute;
          top: 50px;
          right: 0;
          background: white;
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 15px;
          width: 160px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .username {
          font-weight: 600;
          margin-bottom: 5px;
        }

        .role {
          font-size: 14px;
          color: gray;
          margin-bottom: 10px;
        }

        button {
          width: 100%;
          padding: 8px;
          border: none;
          border-radius: 6px;
          background: #232323;
          color: white;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}