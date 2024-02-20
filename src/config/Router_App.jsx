import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Todo from "../pages/Todo";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Todo />} /></Route>
    )
)


const Router_App = () => {


    return <RouterProvider router={router} />
}


export { Router_App }