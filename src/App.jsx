import { useState } from "react";
import "./App.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter An Item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <>
      <Navbar />
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg: items-center gap-2 mt-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Add an Item..."
                className="input input-bordered input-primary w-full max-w-xs"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <button
                className="btn btn-active btn-primary"
                onClick={(e) => addItem()}
              >
                Add <MdAddCircleOutline />
              </button>
            </div>
            <ul className="mt-4">
              {items.map((item) => {
                return (
                  <li key={item.id}>
                    {" "}
                    {item.value}{" "}
                    <button
                      className="btn btn-active"
                      onClick={() => deleteItem(item.id)}
                    >
                      {" "}
                      <FaRegTrashAlt />{" "}
                    </button>{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
