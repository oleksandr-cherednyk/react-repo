import Greeting from "./components/Greeting";
import ShopingList from "./components/ShopingList";
import OrderStatus from "./components/OrderStatus";

import "./App.css";

function App() {
  const products = ["Мясо", "Колбаса", "Яйца", "Молоко"];
  const orders = [
    { orderId: 122, status: "обработан" },
    { orderId: 123, status: "в пути" },
    { orderId: 124, status: "доставлен" },
  ];

  return (
    <div className="App">
      <Greeting name="Oleksandr" />
      <ShopingList list={products} />

      <OrderStatus orderId={orders[1].orderId} status={orders[1].status} />
      <OrderStatus orderId={orders[0].orderId} status={orders[0].status} />
      <OrderStatus orderId={orders[2].orderId} status={orders[2].status} />
    </div>
  );
}

export default App;
