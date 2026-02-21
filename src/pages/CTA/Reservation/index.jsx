import { useState } from "react";

export default function Reservation() {
  const today = new Date().toISOString().split("T")[0];

  const timeSlots = [
    "10:00 AM",
    "12:00 PM",
    "2:00 PM",
    "4:00 PM",
    "6:00 PM",
    "8:00 PM",
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "1",
    note: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";

    if (parseInt(formData.guests) > 8) {
      newErrors.guests = "For more than 8 guests, please call us directly.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // 🔹 Backend logic can go here later
      console.log("Reservation Data:", formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="reservation-container">
        <h2>🎉 Reservation Confirmed!</h2>
        <div className="summary">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Guests:</strong> {formData.guests}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="reservation-container">
      <h2>Reserve a Table</h2>

      <form onSubmit={handleSubmit} className="reservation-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email (Optional)"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          min={today}
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <span className="error">{errors.date}</span>}

        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          <option value="">Select Time</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {errors.time && <span className="error">{errors.time}</span>}

        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        >
          {[1,2,3,4,5,6,7,8,9,10].map((num) => (
            <option key={num} value={num}>
              {num} Guest{num > 1 && "s"}
            </option>
          ))}
        </select>
        {errors.guests && <span className="error">{errors.guests}</span>}

        <textarea
          name="note"
          placeholder="Special Request (Optional)"
          rows="3"
          value={formData.note}
          onChange={handleChange}
        />

        <button type="submit">Reserve Table</button>
      </form>

      <style>{`
        .reservation-container {
          max-width: 500px;
          margin: 40px auto;
          padding: 20px;
          font-family: system-ui, sans-serif;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .reservation-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        input, select, textarea {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #a64b2a;
        }

        button {
          padding: 12px;
          background-color: #a64b2a;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }

        button:hover {
          opacity: 0.9;
        }

        .error {
          font-size: 12px;
          color: red;
        }

        .summary {
          background: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
        }

        @media (min-width: 768px) {
          .reservation-container {
            padding: 40px;
          }
        }
      `}</style>
    </div>
  );
}