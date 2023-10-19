"use client"
import { useCartStore } from "@/store/useCartStore"
import { ProductType } from "@/types/productTypes";

interface AddToCartType{
  product : ProductType
}

const AddToCartButton = ({product} : AddToCartType) => {
  const cartStore = useCartStore();
  return (
    <>
      <button 
        className="my-12 text-white py-2 px-6 font-medium rounded-md bg-secondary"
        onClick={() => cartStore.addToCart({
          ...product
        })}
      >Add to cart</button>
    </>
  )
}

export default AddToCartButton