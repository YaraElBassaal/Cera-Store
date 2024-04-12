import { FaShoppingCart } from "react-icons/fa";
export default function CartIcon(){
    return (
        <div className="cart-icon">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">0</span>
        </div>
    )
}