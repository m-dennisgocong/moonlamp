import { AiOutlineHeart } from "react-icons/ai";
import { useWishlistStore } from "@/store/useWishListStore";
import { ProductType } from "@/types/productTypes";

interface AddToWishListType{
  product : ProductType
}

const AddToWishlistButton = ({ product }: AddToWishListType) => {
  const wishlistStore = useWishlistStore();

  return (
    <div
      className="flex items-center gap-2 justify-center cursor-pointer border py-2 px-5 rounded-md"
      onClick={() => wishlistStore.addToWishlist({
        ...product
      })}
    >
      <AiOutlineHeart />
      <span>Add To Wishlist</span>
    </div>
  );
};

export default AddToWishlistButton;