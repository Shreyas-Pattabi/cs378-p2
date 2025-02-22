import './App.css';
import MenuItem from './components/MenuItem';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [itemCounts, setItemCounts] = useState(
    menuItems.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const handleIncrement = (id) => {
    setItemCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrement = (id) => {
    setItemCounts((prev) => ({
      ...prev, [id]: prev[id] > 0 ? prev[id] - 1 : 0}));
  };

  const totalCost = menuItems.reduce((total, item) => {
    return total + itemCounts[item.id] * item.price;
  }, 0);

  const handleClearAll = () => {
    setItemCounts(
      menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
    );
  };

  const handleOrder = () => {
    const orderItems = menuItems.filter(item => itemCounts[item.id] > 0);
    if (orderItems.length === 0) {
      alert("No items ordered!");
      return;
    }
    const orderSummary = orderItems
      .map(item => `${itemCounts[item.id]} x ${item.title}`)
      .join("\n");
    alert(`Order Placed!\n${orderSummary}\n`);
  };

  return (
    <div id="shell">
      <div className="header">
        <img 
          src="https://www.creativefabrica.com/wp-content/uploads/2022/10/08/Japanese-sushi-food-restaurant-bar-logo-Graphics-40697816-1.jpg" 
          alt="Japanese Restaurant" 
          className="logo"
        />
        <h1 className="tagline">Best Japanese in Austin</h1>
      </div>
      <div className="menu">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} count={itemCounts[item.id]} onIncrement={handleIncrement} onDecrement={handleDecrement} />
        ))}
        <div className='summary'>
          Total Cost: {totalCost.toFixed(2)}

          
        </div>
        <div>
          <button className='button' style={{ marginRight: '20px' }} onClick={() => handleOrder()}>Order</button>
          <button className='button' onClick={() => handleClearAll()}>Clear All</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
