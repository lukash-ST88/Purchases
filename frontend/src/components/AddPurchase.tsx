import { useContext, useState } from "react";
import PurchaseService from "../services/PurchaseService";
import { ICategory } from "../models";
import Context from "../context";

interface IAddPurchaseProps {
  categories: ICategory[]
//   refresh: boolean;
//   setRefresh: (refresh: boolean) => void;
}

const AddPurchase = ({categories}: IAddPurchaseProps) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);
  const {refresh, setRefresh } = useContext(Context);

  function onClickAdd(){
    AddPurchase();
    setRefresh(!refresh);
  }
  
  async function AddPurchase() {
    PurchaseService.addPurchase({ name, price, category });
  }

  return (
    <div className="grid grid-cols-1 gap-1">
      <div>
        <label htmlFor="username" className="text-green-500 m-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="border border-green-500 rounded-md"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price" className="text-green-500 m-2">
          Price:
        </label>
        <input
          type="number"
          id="price"
          className="border border-green-500 rounded-md"
          required
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <select
      value={category}
      onChange={(event) => {
        setCategory(Number(event.target.value));
        console.log(category)
      }}
      className="border border-green-500 bg-white rounded-md p-2 hover:bg-green-500 hover:text-white text-green-500"
    >
      <option disabled value="">
        not chosen
      </option>
      {categories.map((cat: ICategory, index: number) => (
        <option key={index} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
      <button
        className="border border-green-500 rounded-md hover:bg-green-500 hover:text-white text-green-500"
        onClick={onClickAdd}
      >
        Add Purchase
      </button>
    </div>
  );
};
export default AddPurchase;

