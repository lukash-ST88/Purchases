import { useContext, useState } from "react";
import { Checkbox, Modal } from "flowbite-react";
import { ICategory, IPurchase, IPurchaseAdd } from "../models";
import PurchaseService from "../services/PurchaseService";
import Context from "../context";

interface IModalPurchaseProps {
  purchase: IPurchase;
  categories: ICategory[]
};

const ModalEditPurchase = ({ purchase, categories }: IModalPurchaseProps) => {
  const [name, setName] = useState<string>(purchase.name);
  const [price, setPrice] = useState<number>(purchase.price);
  const [category, setCategory] = useState<number>(purchase.category?.id);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {refresh, setRefresh} = useContext(Context);

  function onCloseModal() {
    setOpenModal(false);
  }

  const onUpdateClick = () => {
    const data = {
      name,
      price,
      category,
    };
    updatePurchase(data, purchase.id);
    setOpenModal(false);
    setRefresh(!refresh);
  };

  async function updatePurchase(data: IPurchaseAdd, cat_id: number) {
    PurchaseService.updatePurchaseById(cat_id, data);
  }

  return (
    <div className="border border-yellow-400 hover:bg-yellow-400 p-2 rounded-md">
      <button onClick={() => setOpenModal(true)} className="">
        Edit
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        className="bg-gray-400 w-30 p-20"
      >
        <Modal.Body className="p-10 mx-10">
          <div className="text-2xl text-black text-center">
            {" "}
            Update Purchase{" "}
          </div>
          <div className=" ">
            <div>
              <label htmlFor="username" className="text-black">
                Name:
              </label>
              <input
                type="text"
                id="username"
                className="border-2 border-green-500 rounded px-2 mx-2 my-2 text-black"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-black">
                Price:
              </label>
              <input
                type="number"
                id="price"
                className="border-2 border-green-500 rounded px-2 mx-2 my-2 text-black"
                required
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
          </div>
          <select
            value={category}
            onChange={(event) => {
              setCategory(Number(event.target.value));
              console.log(category);
            }}
            className="border border-green-500 bg-white rounded-md p-2 hover:bg-green-500 hover:text-white text-green-500"
          >
            {categories.map((cat: ICategory, index: number) => (
              <option key={index} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            onClick={onUpdateClick}
            className="hover:bg-green-500 w-full my-2 text-green-500 hover:text-white rounded border-2 border-green-500"
          >
            Update
          </button>
          <button
            className="text-gray-500 bg-white border border-gray-500 hover:bg-gray-500 hover:text-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            onClick={() => onCloseModal()}
          >
            Close
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalEditPurchase;
