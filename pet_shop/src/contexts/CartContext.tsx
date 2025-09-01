import { createContext, useState } from "react";
import type { ProductsProps } from "../pages/home";


interface CartContextData {
    cart: CartProps[],
    cartAmount: number,
    addItemToCart: (item: ProductsProps) => void
    subItemToCart: (item: ProductsProps) => void
    calcularTotal: (cart: CartProps[]) => number
}

interface CartProps {
    id: number,
    title: string,
    description?: string,
    price: number,
    cover: string,
    amount: number
    total: number
}

export const CartContext = createContext({} as CartContextData);

export default function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartProps[]>([])

    function addItemToCart(item: ProductsProps) {
        const produtoExistente = cart.findIndex(produto => produto.id === item.id)

        if (produtoExistente !== -1) {
            const updatedCart = cart.map((item, index) => {
                if (index === produtoExistente) {
                    const newAmount = item.amount + 1
                    return {
                        ...item,
                        amount: newAmount,
                        total: item.price * newAmount
                    }
                }
                return item
            })
            setCart(updatedCart)
            return
        }

        const newProduct = {
            ...item,
            amount: 1,
            total: item.price
        }

        setCart(prev => [...prev, newProduct])
    }

    function subItemToCart(item: ProductsProps) {
        const indexItem = cart.findIndex(product => product.id === item.id);
        const newAmount = cart[indexItem].amount - 1;

        if (newAmount <= 0){
            const arrFiltrado = cart.filter(product => product !== item)
            setCart([...arrFiltrado])
            return

        }

        const updatedCart = cart.map((item, index) => {
            if (index === indexItem) {
                return {
                    ...item,
                    amount: newAmount,
                    total: item.price * newAmount
                }
            }
            return item
        })

        setCart(updatedCart)
    }

    function calcularTotal(cart: CartProps[]){
        const myCart = cart
        const total = myCart.reduce((acc, obj)=> {return acc+ obj.total}, 0)
        return total
    }


    return (
        <CartContext.Provider value={{ cart, cartAmount: cart.length, addItemToCart, subItemToCart, calcularTotal }}>
            {children}
        </CartContext.Provider>
    )
}