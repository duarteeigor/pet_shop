import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"

export function Header() {
    const {cartAmount} = useContext(CartContext)
    return (
        <header className="sticky top-0 w-full bg-gray-100 h-20">
            <nav className="flex items-center justify-around py-6 ">
                <Link to="/">
                    <h2 className="text-3xl font-medium">Dev Pet</h2>
                </Link>

                <Link to="/carrinho">
                    <button className="relative">
                        <span className="bg-sky-300 text-xs font-bold rounded-full p-1 h-4 w-4 flex items-center justify-center -right-2 -top-1 absolute  ">{cartAmount}</span>
                        <FiShoppingCart size={20} color="black" />
                    </button>
                </Link>
            </nav>

        </header>
    )
}