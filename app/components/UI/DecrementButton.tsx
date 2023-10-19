import { useCartStore } from "@/store/useCartStore"
import { ProductType } from "@/types/productTypes";
import { FiMinus } from "react-icons/fi"

interface DecrementProductType{
    product: ProductType
}

const DecrementButton = ({product} : DecrementProductType) => {

    const carStore = useCartStore();
    return (
        <button onClick={()=> carStore.removeProduct({...product})}>
            <FiMinus/>
        </button>
    )
}

export default DecrementButton