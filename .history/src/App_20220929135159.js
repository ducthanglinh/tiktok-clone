import { useMemo, useState } from "react";
import Content from "./Content";
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
  };

  const total = useMemo(() => {
    const totalProd = products.reduce((result, prod) => {
      console.log("tinhs toan...");
      return result + prod.price;
    }, 0);
    return totalProd;
  }, [products]);
  console.log(total);
  return (
    <div style={{ padding: 20 }}>
      <input
        value={name}
        placeholder="Enter Name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter Price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
