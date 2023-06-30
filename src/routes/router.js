import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { Home } from "../components/home/Home";
import { Portafolio } from "../components/portfolio/Portafolio";
import { Resume } from "../components/resume/Resume";
import { Services } from "../components/services/Services";



export const router = ()=>{
   return [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/resume',
        element: <Resume />
    },
    {
        path: '/Portafolio',
        element: <Portafolio />
    },
    {
        path: '/services',
        element: <Services />
    },
    {
        path: '/contact',
        element: <Contact />
    }
    ,
    {
        path: '/services/:id',
        element: <h1>Producto id</h1>
    }
]
}