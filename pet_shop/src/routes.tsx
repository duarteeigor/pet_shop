import {createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Layout } from "./layout";
import { Details } from "./pages/details";

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
            },
            {
                path: "/details/:id",
                element: <Details />
            }
        ]
    }
])


export default router