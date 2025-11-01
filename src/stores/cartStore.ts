import { CartActionStateType,CartStateType} from "@/types";
import { create } from "zustand";


const useCartStore = create< CartActionStateType &  CartStateType>()(
    (set) => ({
   cart:[],
   addToCart:(product)=>set((state=>({cart:[...state.cart,product]}))),
   removeFromCart:(product)=>set((state)=>({cart:state.cart.filter((item)=>item.id!==product.id)})),
   clearCart:()=>set({cart:[]})
     })
     
  
);
export default useCartStore;
