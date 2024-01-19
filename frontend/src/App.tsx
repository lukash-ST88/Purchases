import React, { useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Purchases from "./components/Purchase";
import { useFetching } from "./hooks/useFetching";
import PurchaseService from "./services/PurchaseService";
import { ICategory, IPurchase } from "./models";
import Purchase from "./components/Purchase";
import Sorter from "./components/Sorter";
import CategoryService from "./services/CategoryService";
import Filter from "./components/Filter";
import AddCategory from "./components/AddCategory";
import AddPurchase from "./components/AddPurchase";
import Context from "./context";

function App() {
  const [purchases, setPurschases] = useState<IPurchase[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [sort, setSort] = useState<string>("");
  const [pk, setPk] = useState<number>(0);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    fetchPurchaes(sort, pk);
    fetchCategories();
  }, [sort, pk, refresh]);

  const [fetchPurchaes, isPurchaseLoading, purchaseError]: any = useFetching(
    async (sort: string, pk: number) => {
      let response;
      if (pk != 0) {
        response = await PurchaseService.getFilteredPurchases(pk);
      } else if (sort.length) {
        response = await PurchaseService.getSortedPurchases(sort);
      } else {
        response = await PurchaseService.getAllPurchases();
      }
      setPurschases([...response.data]);
    }
  );

  const [fetchCategories, isCategoryLoading, categoryError]: any = useFetching(
    async () => {
      const response = await CategoryService.getAllCategories();
      setCategories([...response.data]);
    }
  );
 

  return (
    <Context.Provider value={{ refresh, setRefresh }}>
      <div className="container p-10 m-10 grid grid-cols-1 gap-4 divide-y-2">
        <div className="flex flex-wrap justify-around">
          <AddPurchase categories={categories}/>
          <button onClick={()=>setRefresh(!refresh)} className="border rounded-md border-yellow-500 hover:bg-yellow-500 my-10 px-2">refresh</button>
          <AddCategory />
        </div>
        <div className="flex flex-wrap justify-around">
          <Sorter sort={sort} setSort={setSort} />
          <Filter categories={categories} filter={pk} setFilter={setPk} />
        </div>
        <div className="grid grid-cols-1 justify-around">
          {purchases.map((purchase: IPurchase) => (
            <Purchase categories={categories} purchase={purchase} />
          ))}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
