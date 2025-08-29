import {createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Carrinho } from "./pages/carrinho";
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
                element: <Carrinho />
            }
        ]
    }
])


export default router