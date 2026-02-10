import BackButton from "../common/BackButton";
import "./Menu.css";

export default function Menu() {
  const menuItems = [
    { category: "Coffee", name: "Espresso", price: "₹120" },
    { category: "Coffee", name: "Cappuccino", price: "₹160" },
    { category: "Coffee", name: "Latte", price: "₹170" },

    { category: "Tea", name: "Masala Chai", price: "₹80" },
    { category: "Tea", name: "Green Tea", price: "₹90" },

    { category: "Snacks", name: "Veg Sandwich", price: "₹140" },
    { category: "Snacks", name: "Cheese Toast", price: "₹130" },
  ];

  // Group items by category
  const groupedMenu = menuItems.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
    <BackButton/>
    <section className="menu">
      <h2 className="menu-title">Our Menu</h2>

      {Object.entries(groupedMenu).map(([category, items]) => (
        <div key={category} className="menu-category">
          <h3 className="category-title">{category}</h3>

          <ul className="menu-list">
            {items.map((item, index) => (
              <li key={index} className="menu-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    </>
  );
}
