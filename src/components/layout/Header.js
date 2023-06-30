import {useState,useEffect,useRef} from 'react';
import { Link,useLocation } from "react-router-dom";

const profileImg = require('./img/profile-img.jpg');

export const Header = ()=>{

    //Debemos saber en que pagina nos encontramos via url
    const {pathname:location} = useLocation();

    //Controlamos el click del botón para mostrar u ocultar el sidebar
    const [toggleButton,setToggleButton] = useState(true);
    //Referencia del sidebar
    const refSideBar = useRef(null);

    //Controlamos que opción del menú se active
    const [optionActive,setOptionActive] = useState({
        '/home':'active'
    });

    //Una vez cargada la pagina verificamos en que módulo nos encontramos
    useEffect(() => {
        setOptionActive({[location] :'active'});
    },[location]);

    /*Al dar click fuera del menú debe cerrarse, sólo en el caso de dispositivos mobiles*/
    useEffect(()=>{
        const handleClickOutside = (event)=> {
            if (refSideBar.current && !refSideBar.current.contains(event.target)) 
                setToggleButton(true);
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    },[]);

   
    return(

        <header id="header" ref={refSideBar} className={`${!toggleButton && 'show' }`}>
            <div className="d-flex flex-column">
                <Menu 
                    optionActive={optionActive}
                    setOptionActive={setOptionActive}
                    setToggleButton={setToggleButton}
                />
                <ButtonToggleMenu toggleButton={toggleButton} setToggleButton={setToggleButton}/>

            </div>
        </header>

    )
}


const Menu = ({optionActive,setOptionActive,setToggleButton})=>{
    
    const goTo = (location)=>{
        setToggleButton(true);
        setOptionActive({[location] :'active'})
    }   

    return(
        <>
            <Profile />

            <nav className="nav-menu">
                <ul>
                    <li className={optionActive['/home']}><Link className="link" onClick={()=>goTo('/home')} to="home"><i className="fa fa-home"></i> Home</Link></li>
                    <li className={optionActive['/about']}><Link className="link" onClick={()=>goTo('/about')} to="about"><i className="fas fa-user"></i> About</Link></li>
                    <li className={optionActive['/resume']}><Link className="link" onClick={()=>goTo('/resume')} to="resume"><i className="far fa-file"></i> Resume</Link></li>
                    <li className={optionActive['/portafolio']}><Link className="link" onClick={()=>goTo('/portafolio')} to="portafolio"><i className="fas fa-book"></i> Portfolio</Link></li>
                    <li className={optionActive['/services']}><Link className="link" onClick={()=>goTo('/services')} to="services"><i className="fa fa-server"></i> Services</Link></li>
                    <li className={optionActive['/contact']}><Link className="link" onClick={()=>goTo('/contact')} to="contact"><i className="far fa-envelope"></i> Contact</Link></li>
                </ul>
            </nav>

        </>  
    )
}

const Profile = ()=>{
    return(
        <div className="profile">
            <img src={profileImg} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Uriel Alejandro</a></h1>
            <div className="social-links mt-3 text-center">
                <span className="twitter"><i className="fab fa-twitter"></i></span>
                <span className="facebook"><i className="fab fa-facebook-f"></i></span>
                <span className="instagram"><i className="fab fa-instagram"></i></span>
                <span className="google-plus"><i className="fab fa-skype"></i></span>
                <span className="linkedin"><i className="fab fa-linkedin-in"></i></span>
            </div>
        </div>
    )
}

const ButtonToggleMenu = ({toggleButton,setToggleButton})=>{

    const onClick = ()=>{
        setToggleButton(!toggleButton);
    }

    return(
        <button type="button" className="mobile-nav-toggle d-xl-none" onClick={onClick}><i className={`fas ${toggleButton ? 'fa-bars' : 'fa-times'}`}></i></button>
    )
}

