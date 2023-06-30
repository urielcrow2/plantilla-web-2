import {useState,useRef,useEffect} from 'react';
import Typed from 'react-typed';
import './home.css';


export const Home = ()=>{

    return(
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container wow bounceInUp" data-wow-duration="1.4s">
                <h1>Uriel Alejandro</h1>
                <p style={{fontSize:20}}>Yo soy&nbsp;
                    <Typed
                        strings={['desarrollador front-end','desarrollador back-end','diseñador gráfico']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </p>
            </div>

           <FloatBtnGroups />

        </section>
    )
}



const FloatBtnGroups = ()=>{

    const [display,setDisplay] = useState(true);
    const refBtnMain = useRef(null);

     /*Al dar click fuera del menú debe cerrarse, sólo en el caso de dispositivos mobiles*/
    useEffect(()=>{
         const handleClickOutside = (event)=> {
             if (refBtnMain.current && !refBtnMain.current.contains(event.target)) 
                 setDisplay(true);
         }
         document.addEventListener("mousedown", handleClickOutside);

         return () => document.removeEventListener("mousedown", handleClickOutside);
    },[]);

    return(
        <div ref={refBtnMain} className='container-menuBtn'>
            {/* <FloatBtn display={display} icon="fas fa-key" onClick={()=>console.log('realizar acción')}/> */}
            <FloatBtn2 display={display} title="Cambiar contraseña" color="green" icon="fas fa-key" onClick={()=>console.log('realizar acción')} />
            <FloatBtn2 display={display} title="Detalles" color="red" icon="fas fa-info" onClick={()=>console.log('realizar acción')} />
            <FloatBtn2 display={display} title="Actualizar" color="yellow" icon="fas fa-sync-alt" onClick={()=>console.log('realizar acción')} />
            <FloatBtn2 main icon={`fas ${display ? 'fa-pencil-alt' : 'fa-times'}`} onClick={()=>setDisplay(!display)} />
        </div>
    )
}

const FloatBtn = ({display,icon,onClick,color="blue",main=false})=>{
    return(
        <i className={`${main ? 'menuBtnMain ' : 'menuBtn '} ${color} ${icon} ${display ? ' displayOff' : ' displayOn'}`} onClick={onClick}></i>
    )
}

const FloatBtn2 = ({display,icon,onClick,color="blue",title="",main=false})=>{

    const btn = useRef(null);

    useEffect(()=>{

        btn.current.onclick = (e)=>{

            const waves_ripple = btn.current.childNodes;
            waves_ripple[0].classList.remove("waves-animate");

            const d = Math.max(btn.current.clientWidth, btn.current.clientHeight);
            waves_ripple[0].style.height = `${d}px`;
            waves_ripple[0].style.width = `${d}px`;
                
            const x = e.pageX - btn.current.getBoundingClientRect().left - waves_ripple[0].clientWidth / 2;
            const y = e.pageY - btn.current.getBoundingClientRect().top - waves_ripple[0].clientHeight / 2;
            waves_ripple[0].style.top = `${y}px`;
            waves_ripple[0].style.left = `${x}px`;
            waves_ripple[0].classList.add("waves-animate");
        
        }

    },[]);

    return(
        <div className='position-relative d-flex justify-content-end align-items-center'>
            {
                title
                &&
                <span className={` ${display ? 'displayOff' : 'displayOn'} label-title`}>
                    <span>{title}</span> 
                </span>
            }
            <i ref={btn} className={`${main ? 'menuBtnMain ' : 'menuBtn '} ${color} ${icon} ${display ? 'displayOff' : 'displayOn'} waves`} onClick={onClick}>
                <span className="waves-ripple"></span>
            </i>
        </div>
    )
}