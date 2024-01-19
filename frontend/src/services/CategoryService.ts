import axios from "axios";
import { ICategory, ICategoryAdd, IPurchase } from "../models";
import { API_URL } from "./ServiceSetting";

class CaregoryService{
    getAllCategories(){
        const url = `${API_URL}/api/categories`;
        const response = axios.get<ICategory[]>(url);
        return response;
    };
    addCategory(data: ICategoryAdd){
        const url = `${API_URL}/api/add-category/`;
        axios.post<ICategoryAdd>(url, data)
    };
};

export default new CaregoryService;