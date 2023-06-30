
import { useRoutes, Navigate, Outlet} from "react-router-dom";
import { router } from './router';
import { Footer,Header } from '../components/layout';
import { ButtonFloat } from "../components/miscellaneous/buttonFloat/ButtonFloatComponent";


export const RoutApp = ()=>{


    const all_routes = [
        {
            element:(
                <>
                    <Header />
                    <main id="main">
                        <Outlet />
                        <ButtonFloat />
                    </main>
                    <Footer />
                </>
            ),
            children: router()
        },
        {
            path: '/',
            element: <Navigate to="/home" />,
        },
        { 
            path: '*',
            element: <Navigate to="/" />,
        }
    ];

    const all_pages = useRoutes(all_routes)//Nos crea <Routes> {...<Route></Route>} </Routes>


   return(
        <>
            { all_pages }
        </>
   )

}