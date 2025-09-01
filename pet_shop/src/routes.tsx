import {createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Layout } from "./layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/carrinho",
                element: <Cart />
            }
        ]
    }
])


export default router