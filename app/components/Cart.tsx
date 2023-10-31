import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import formatPrice from "@/utils/formatPrice";
import { totalPrice } from "@/utils/totalPrice";
import DecrementButton from "./UI/DecrementButton";
import IncrementButton from "./UI/IncrementButton";

const Cart = () => {
    const cartStore = useCartStore()
    const total = totalPrice(cartStore.cart)
    return (
    <div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50">
        <div onClick={(e) => e.stopPropagation()} className="bg-white text-center md:text-left absolute right-0 top-0 lg:px-10 lg:w-2/6 md:w-3/5 w-3/5 h-screen p-5">
            {cartStore.onCheckout === 'checkout' && (<button onClick={()=> cartStore.setCheckout('cart')} className="">Back to cart</button>)}
            {
            cartStore.onCheckout === 'cart' &&  
                (
                <>
                <button onClick={()=> cartStore.toggleCart()} className="">Back to store</button>
                
                {cartStore.cart.map((product) => (
                    <div className="flex flex-col md:flex-row py-4 gap-4 items-center border-b-2 border-b-gray-300 justify-between md:justify-center" key={product.id}>
                        <Image src={product.image} width={150} height={150} alt="moonlamp"/>
                        <h1 className="font-medium">{product.name}</h1>
                        <div className="flex gap-2 justify-center items-center bg-black/10 px-2 rounded-sm">
                            <DecrementButton product={product}/>
                            <h2>{product.quantity}</h2>
                            <IncrementButton product={product}/>
                        </div>
                    </div>
                ))}
                {cartStore.cart.length > 0 && <span>Total: {formatPrice(total)}</span>}
                </>
                )
            }
            {cartStore.cart.length < 1 && cartStore.onCheckout === 'cart' ? 
                (
                    <div className="h-full flex items-center justify-center">
                        <span className="text-lg uppercase font-bold whitespace-nowrap">Your cart is empty</span>
                    </div>
                )
                : 
                null
            }
            {cartStore.onCheckout === 'cart' && cartStore.cart.length > 0 ? 
                (<button 
                    onClick={() => cartStore.setCheckout('checkout')}
                    className="bg-primary py-2 mt-4 w-full rounded-md text-white">Checkout</button>)
                :
                null
            }

        </div>
    </div>
  )
}

export default Cart