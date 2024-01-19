export interface ICategory {
    readonly id: number
    name: string
}

export interface ICategoryAdd {
    name: string
}

export interface IPurchase {
    readonly id: number
    name: string
    price: number
    category: ICategory 
}

export interface IPurchaseAdd {
    name: string
    price: number
    category: number
};

// export interface IPurchaseUpdate {
//     name: string
//     price: number
//     category: number
// };
