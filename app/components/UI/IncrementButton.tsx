import { FiPlus } from "react-icons/fi";
import { useCartStore } from "@/store/useCartStore";
import { ProductType } from "@/types/productTypes";

interface IncrementProductType{
    product : ProductType
}
const IncrementButton = ({product}:IncrementProductType) => {
    const cartStore = useCartStore()
  return (
    <div onClick={() => cartStore.addToCart({...product})}>
        <FiPlus />
    </div>
  )
}

export default IncrementButton