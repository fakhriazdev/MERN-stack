import { createBrowserRouter } from 'react-router-dom';
import ListRecipe from "../pages/Home/components/ListRecipe.jsx";
import DetailRecipe from "../pages/Home/components/DetailRecipe.jsx";
import Home from "../pages/Home/index.jsx";


const setupRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
            errorElement: <>Page not Found.</>,
            children: [
                {
                index: true,
                element: <ListRecipe/>,
                },
                {
                    path: ':id/detail',
                    element: <DetailRecipe />,
                },
            ]
        },
    ]);

export default setupRouter;
