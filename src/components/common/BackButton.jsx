import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <button className="back-btn" onClick={() => navigate("/home")}>
        ← Back to Home
      </button>

      <style>{`
        .back-btn {
          margin: 16px;
          background: transparent;
          border: none;
          color: #2b2b2b;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
        }

        .back-btn:active {
          opacity: 0.6;
        }
      `}</style>
    </>
  );
}
