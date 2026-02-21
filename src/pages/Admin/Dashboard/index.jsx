import { useAuth } from "../../../context/AuthContext";

export default function Admin() {
  const { logout } = useAuth();

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">☕ Cafe Admin</h2>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Orders</a>
          <a href="#">Reservations</a>
          <a href="#">Menu</a>
          <a href="#">Users</a>
        </nav>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <p>Welcome back, Admin 👋</p>
        </header>

        {/* Stats Cards */}
        <section className="stats">
          <div className="card">
            <h3>Total Orders</h3>
            <p>128</p>
          </div>

          <div className="card">
            <h3>Reservations</h3>
            <p>54</p>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <p>$2,340</p>
          </div>

          <div className="card">
            <h3>Users</h3>
            <p>89</p>
          </div>
        </section>

        {/* Recent Orders Table */}
        <section className="table-section">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1023</td>
                <td>John Doe</td>
                <td>$24</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>#1024</td>
                <td>Sarah Lee</td>
                <td>$18</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>#1025</td>
                <td>Michael</td>
                <td>$32</td>
                <td>Preparing</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <style>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          font-family: system-ui, sans-serif;
          background: #f5f6fa;
        }

        .sidebar {
          width: 220px;
          background: #232323;
          color: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .logo {
          margin-bottom: 30px;
        }

        .sidebar nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sidebar nav a {
          color: white;
          text-decoration: none;
          font-size: 14px;
        }

        .sidebar nav a:hover {
          opacity: 0.8;
        }

        .logout-btn {
          margin-top: auto;
          padding: 10px;
          background: #a64b2a;
          border: none;
          border-radius: 6px;
          color: white;
          cursor: pointer;
        }

        .main-content {
          flex: 1;
          padding: 30px;
        }

        .header h1 {
          margin: 0;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .card h3 {
          margin-bottom: 10px;
          font-size: 14px;
          color: #555;
        }

        .card p {
          font-size: 22px;
          font-weight: bold;
        }

        .table-section {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }

        th, td {
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #eee;
        }

        th {
          font-size: 13px;
          color: #777;
        }

        @media (max-width: 768px) {
          .admin-layout {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .sidebar nav {
            flex-direction: row;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}