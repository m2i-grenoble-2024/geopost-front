export interface Category {
    id?:number;
    label:string;
}

export interface Post {
    id?:number;
    latitude:number;
    longitude:number;
    message:string;
    postedAd:string|Date;
    author?:string;
    category?:Category;
    picture?:string;
}