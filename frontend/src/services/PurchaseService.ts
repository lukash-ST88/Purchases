import axios from "axios";
import { API_URL } from "./ServiceSetting"
import { IPurchase, IPurchaseAdd} from "../models";

class PurchaseService {
    getAllPurchases(){
        const url = `${API_URL}/api/`;
        const response = axios.get<IPurchase[]>(url);
        return response;
    };
    getSortedPurchases(sort: string){
        const url = `${API_URL}/api/sorted/${sort}/`
        const response = axios.get<IPurchase[]>(url);
        return response;
    };
    getFilteredPurchases(pk: number){
        const url = `${API_URL}/api/category/${pk}/`
        const response = axios.get<IPurchase[]>(url);
        return response;
    };
    addPurchase(data: IPurchaseAdd){
        const url = `${API_URL}/api/add/`;
        axios.post<IPurchaseAdd>(url, data)
    };
    deletePurchase(pk: number){
        const url = `${API_URL}/api/${pk}/`
        axios.delete(url)
    }
    getPurchaseById(pk: number){
        const url = `${API_URL}/api/${pk}/`
        axios.get(url)
    }
    updatePurchaseById(pk: number, data: IPurchaseAdd){
        const url = `${API_URL}/api/${pk}/`
        axios.put(url, data)
    }

};

export default new PurchaseService;


