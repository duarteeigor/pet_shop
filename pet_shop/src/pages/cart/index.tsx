import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router"

export function Cart() {
    const { cart, addItemToCart, subItemToCart, calcularTotal } = useContext(CartContext)
    return (
        <div className="flex flex-col justify-center items-center my-10">

            {cart.length > 0 ? 
            (
                <>
                <h2 className="text-2xl font-medium mb-12">Meu carrinho</h2>

            <div className="max-w-7xl w-full">
                {cart.map((item) => {
                    return (
                        <section className="flex items-center justify-between h-45 border-b-2 border-gray-200 p-2">
                            <img className="max-w-xs h-full" src={item.cover} alt="image" />
                            <strong>Preço: {item.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}</strong>

                            <div className="flex items-center gap-2">
                                <button className="bg-amber-600 text-white p-1 rounded w-6 h-8 cursor-pointer" onClick={() => subItemToCart(item)} >-</button>
                                <span>{item.amount}</span>
                                <button className="bg-amber-600 text-white p-1 rounded w-6 h-8 cursor-pointer" onClick={() => addItemToCart(item)}>+</button>
                            </div>

                            <strong className="w-2/12">SubTotal: {item.total.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}</strong>
                        </section>
                    )
                })}

                
                <strong className="font-medium">Total: {calcularTotal(cart).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
                </strong>
            </div>
                </>
            ) :
            (
                <div className="flex flex-col justify-center items-center gap-6">
                    <h2 className="text-2xl font-medium">Seu carrinho está vazio!</h2>
                    <Link to="/">
                        <button className="bg-amber-600 rounded-full p-2 text-white cursor-pointer hover:bg-amber-700 transition-colors">Voltar para Home</button>
                    </Link>
                    
                </div>
            )}
            
        </div>

    )
}