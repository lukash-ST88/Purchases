import { useContext } from "react";
import { ICategory, IPurchase } from "../models";
import PurchaseService from "../services/PurchaseService";
import ModalEditPurchase from "./ModalEditPurchase";
import Context from "../context";
interface IPurchasePorps {
  purchase: IPurchase;
  categories: ICategory[]
}

const Purchase = ({ purchase, categories }: IPurchasePorps) => {
  const { refresh, setRefresh} = useContext(Context);

  function onDeleteClick() {
    deletePurchase();
    setRefresh(!refresh);
  }

  async function deletePurchase() {
    PurchaseService.deletePurchase(purchase.id);
  }

  return (
    <div className="flex flex-wrap justify-between border border-gray-500 rounded-sm m-2 p-2">
      <div>{purchase.id}</div>
      <div>{purchase.name}</div>
      <div>{purchase.price} Rub </div>
      <div>{purchase.category?.name}</div>
      <div className="flex flex-wrap gap-2 ">
          <ModalEditPurchase purchase={purchase} categories={categories}/>
        <button
          onClick={onDeleteClick}
          className="text-red-600 border border-red-600 rounded-md p-1 hover:bg-red-600 hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Purchase;
