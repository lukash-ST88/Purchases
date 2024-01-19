import { useContext, useState } from "react";
import CategoryService from "../services/CategoryService";
import Context from "../context";



const AddCategory = () => {
  const [name, setName] = useState<string>("");
  const {refresh, setRefresh} = useContext(Context);

  function onClickAdd(){
    AddCategory();
    setRefresh(!refresh)
  };

  async function AddCategory() {
    CategoryService.addCategory({ name });
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
      <button
        className="border border-green-500 rounded-md hover:bg-green-500 hover:text-white text-green-500"
        onClick={onClickAdd}
      >
        Add Category
      </button>
    </div>
  );
};
export default AddCategory;
