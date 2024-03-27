export interface simplifiedProduct {
    _id: string;
    price: number;
    name: string;
    slug: string;
    categoryName: string;
    imageUrl: string;
}

export interface fullProduct {
  _id: string;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
  images: any;
description: string;
price_id: string;
}

export interface ProductCart{
  name: string;
  description: string;
  price: number;
  currency: string;
  image : any;
  price_id : string;
}