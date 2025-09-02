import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { useNavigate, useParams, Link } from "react-router"
import type { ProductsProps } from "../home";
import api from "../../services/api";
import toast from "react-hot-toast";

export function Details(){
    const {id} = useParams();
    const {addItemToCart} = useContext(CartContext)
    const [product, setProduct] = useState<ProductsProps | null>()

    const navigate = useNavigate()

    useEffect(()=>{
        try {
            async function getProduct(){
            const response = await api.get(`/products/${id}`)
            setProduct(response.data)
        }

        getProduct()

        } catch (error) {
            console.log(error)
        }
        
    },[id])

    function handleAddItemToCart(product: ProductsProps){
        toast.success("Produto adicionado ao carrinho!")
        addItemToCart(product)
        navigate("/carrinho")

    }
    return(
        <div className="w-full flex justify-center my-10 px-4">
      {product ? (
        <div className="flex flex-col lg:flex-row max-w-4xl w-full gap-6 bg-[#fde8db] rounded-2xl p-6 shadow-md">
          {/* Imagem */}
          <div className="w-full lg:w-1/2 rounded-lg">
            <img
              src={product.cover}
              alt={product.title}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Informações do produto */}
          <div className="flex flex-col flex-1 items-center lg:items-start justify-center gap-6 text-center lg:text-left">
            <strong className="text-2xl">{product.title}</strong>
            <p className="text-zinc-700 leading-relaxed">{product.description}</p>
            <strong>{product.price.toLocaleString("pt-BR",
                {
                    style: "currency",
                    currency: "BRL"
                }
            )}</strong>
            <button
              className="p-3 bg-amber-600 text-white rounded-2xl hover:opacity-80 transition duration-300 w-full max-w-sm"
              onClick={() => handleAddItemToCart(product)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl">Produto não encontrado!</h1>
          <Link to="/">
            <button className="p-3 bg-black text-white rounded-2xl hover:opacity-80 transition duration-300 w-full max-w-sm">
              Voltar à home
            </button>
          </Link>
        </div>
      )}
    </div>
  )
    
}