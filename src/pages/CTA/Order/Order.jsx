import { useState } from "react";
import BackButton from "../../../components/common/BackButton";

export default function Order() {
  const menuItems = [
    { id: 1, name: "Espresso", price: 120 },
    { id: 2, name: "Cappuccino", price: 160 },
    { id: 3, name: "Latte", price: 170 },
    { id: 4, name: "Masala Chai", price: 80 },
    { id: 5, name: "Veg Sandwich", price: 140 },
  ];

  const [cart, setCart] = useState({});
  const [note, setNote] = useState("");

  const increaseQty = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev };
      if (updated[id] === 1) delete updated[id];
      else updated[id] -= 1;
      return updated;
    });
  };

  const cartItems = menuItems.filter((item) => cart[item.id]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * cart[item.id],
    0
  );

  const generateWhatsAppMessage = () => {
    let message = "Hello 👋%0A";
    message += "I’d like to place an order:%0A%0A";

    cartItems.forEach((item) => {
      message += `• ${item.name} × ${cart[item.id]}%0A`;
    });

    message += `%0ATotal Amount: ₹${total}`;

    if (note.trim()) {
      message += `%0A%0ANote: ${note}`;
    }

    return `https://wa.me/917792985179?text=${message}`;
  };

  return (
    <>
    <BackButton/>
      <section className="order">
        <h2 className="order-title">Order Now</h2>

        <div className="menu-list">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-row">
              <div>
                <p className="item-name">{item.name}</p>
                <p className="item-price">₹{item.price}</p>
              </div>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{cart[item.id] || 0}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="note-box">
          <label>Order Note (optional)</label>
          <textarea
            placeholder="e.g. Less sugar, takeaway"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="cart-summary">
          <p className="total">
            Total: <strong>₹{total}</strong>
          </p>

          <a
            href={total > 0 ? generateWhatsAppMessage() : "#"}
            className={`order-btn ${total === 0 ? "disabled" : ""}`}
          >
            Place Order on WhatsApp
          </a>
        </div>
      </section>

      <style>{`
        .order {
          padding: 48px 16px;
          background-color: #faf7f4;
        }

        .order-title {
          text-align: center;
          font-size: 1.8rem;
          margin-bottom: 32px;
          color: #2b2b2b;
        }

        .menu-list {
          max-width: 520px;
          margin: 0 auto 24px;
        }

        .menu-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid #e6e1dc;
        }

        .item-name {
          font-weight: 500;
          color: #2b2b2b;
        }

        .item-price {
          font-size: 0.9rem;
          color: #666;
        }

        .qty-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .qty-controls button {
          width: 28px;
          height: 28px;
          border: 1px solid #ccc;
          background: #fff;
          font-size: 1rem;
          cursor: pointer;
        }

        .note-box {
          max-width: 520px;
          margin: 0 auto 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .note-box label {
          font-size: 0.9rem;
          color: #444;
        }

        .note-box textarea {
          padding: 10px;
          font-size: 0.9rem;
          border-radius: 6px;
          border: 1px solid #ccc;
          resize: none;
          min-height: 60px;
        }

        .cart-summary {
          max-width: 520px;
          margin: 0 auto;
          text-align: center;
        }

        .total {
          font-size: 1.1rem;
          margin-bottom: 16px;
          color: #2b2b2b;
        }

        .order-btn {
          display: inline-block;
          padding: 14px 20px;
          background-color: #25d366;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
        }

        .order-btn.disabled {
          pointer-events: none;
          opacity: 0.5;
        }

        @media (min-width: 768px) {
          .order {
            padding: 64px 24px;
          }

          .order-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </>
  );
}
