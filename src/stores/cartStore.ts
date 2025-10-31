import { CartActionStateType,  CartActionStateType} from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create< CartActionStateType &  CartActionStateType>()(
  persist(
    (set) => ({
   cart:[],
   addToCart:(product)=>set((state=>({cart:[...state.cart,product]})))




     }))
     
  
);
export default useCartStore;
