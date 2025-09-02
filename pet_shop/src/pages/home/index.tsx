import { useState, useEffect, useContext } from "react"
import api from "../../services/api"
import { Card } from "../../components/Card/Card"
import toast from "react-hot-toast"

import { CartContext } from "../../contexts/CartContext"

export interface ProductsProps{
    id: number,
    title: string,
    price: number,
    cover: string,
    description: string
}

export function Home(){
    const [products, setProducts] = useState<ProductsProps[]>([])

    const {addItemToCart} = useContext(CartContext)

    useEffect(()=>{
        async function getProducts() {
            const response = await api.get("/products")
            setProducts(response.data)
        }

        getProducts()
    }, [])

    function handleAddProduct(item: ProductsProps){
        toast.success("Produto adicionado com sucesso!")
        addItemToCart(item)
    }

    return(
        <div className="flex flex-col text-center mt-15 gap-6 mx-auto items-center justify-center">
            <h2 className="text-2xl font-medium">Os queridinhos do momento!</h2>

            <div className="grid grid-cols-5 gap-6 g w-full max-w-7xl rounded-2xl p-2">
                {products.map((item)=> {
                    return(
                        <Card
                            key={item.id}
                            id={item.id}
                            cover= {item.cover}
                            price={item.price}
                            title={item.title}
                            addToCart={()=> handleAddProduct(item)}
                         />
                    )
                })}      
            </div>
        </div>
    )
}