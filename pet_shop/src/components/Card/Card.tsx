import { Link } from "react-router";

interface CardProps {
    id: number
    title: string,
    cover: string,
    price: number,
    addToCart: () => void;
}

export function Card({id, title, price, cover, addToCart }: CardProps) {
    return (
        <div>
            <section className="p-3 flex flex-col items-center gap-3 bg-[#fde8db] rounded-2xl">
                <Link to={`/details/${id}`}>
                <img className="w-full max-h-60 mb-3 object-contain p-2 rounded-2xl cursor-pointer" src={cover} alt="img"></img>
                </Link>
                <p className="font-medium line-clamp-2 px-2">{title}</p>
                <strong className="text-zinc-800/90">{price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </strong>
                <button className="bg-amber-600 text-gray-100 font-medium rounded-2xl mb-4 w-10/12 p-1 hover:bg-amber-800 transition-colors cursor-pointer" onClick={addToCart}>Adicionar ao carrinho</button>
            </section>
        </div>
    )
}