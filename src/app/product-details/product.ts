export interface Product {
    category:string;
    description:string;
    id:string;
    title:string;
    price:number;
    image?:string
    rates:Rate
}
export interface Rate{
    count:number;
    rate:number
}
