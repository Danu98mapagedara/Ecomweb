import { clear } from "console";
import { z } from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
   category?: string;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export  const shippingFormSchema=z.object({
  name:z.string().min(2,"Name  is required"),
  email:z.email().min(1,"Invalid email address"),   
  address:z.string().min(5,"Address is required"),
  city:z.string().min(2,"City is required"),
  phone:z.string().
  min(7,"Phone is required")
  .max(10,"Phone number must be 7-10 digits"),
})
export type ShippingFormInputs=z.infer<typeof shippingFormSchema>;


export  const paymentFormSchema=z.object({
  cardHolder:z.string().min(2,"Card Holder Name is required"),
  cardNumber:z.
  string()
  .min(16,"Card Number must be 16 digits")
  .max(16,"Card Number must be 16 digits"),
  expirationDate:z.string().min(5,"Expiration Date is required"),
  cvv:z.string().min(3,"CVV must be 3 digits").max(4,"CVV must be 3 or 4 digits"),
})

export type PaymentFormInputs=z.infer<typeof paymentFormSchema>;


export  type CartStateType={
  cart: CartItemsType,
}

export type CartActionStateType={
  addToCart:(product:CartItemType)=>void,
  removeFromCart:(product:CartItemType)=>void,
  clearCart:()=>void
}