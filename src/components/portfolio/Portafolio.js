import { useState,useEffect,useRef } from 'react';
import WOW from 'wowjs';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import './portafolio.css';

const imgsFull = [
    require('./img/portfolio-1.jpg'),
    require('./img/portfolio-2.jpg'),
    require('./img/portfolio-3.jpg'),
    require('./img/portfolio-4.jpg'),
    require('./img/portfolio-5.jpg'),
    require('./img/portfolio-6.jpg'),
    require('./img/portfolio-7.jpg'),
    require('./img/portfolio-8.jpg'),
    require('./img/portfolio-9.jpg'),
];

const group = [
    'filterApp',
    'filterWeb',
    'filterApp',
    'filterCard',
    'filterWeb',
    'filterApp',
    'filterCard',
    'filterWeb',
    'filterCard',
];

export const Portafolio = ()=>{

    
    const [lightbox, setLightbox] = useState({
        photoIndex: 0,
        isOpen: false,
    });

    useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
    },[]);

    return(
        <>
            {/* <Galeria setLightbox={setLightbox}/> */}

            <IsotopeReact setLightbox={setLightbox}/>

            {lightbox.isOpen && (
                <Lightbox
                    mainSrc={imgsFull[lightbox.photoIndex]}
                    nextSrc={imgsFull[(lightbox.photoIndex + 1) % imgsFull.length]}
                    prevSrc={imgsFull[(lightbox.photoIndex + imgsFull.length - 1) % imgsFull.length]}
                    onCloseRequest={() => 
                        setLightbox({ 
                            ...lightbox,
                            isOpen: false 
                        })
                    }
                    onMovePrevRequest={() =>
                        setLightbox({
                            ...lightbox,
                            photoIndex: (lightbox.photoIndex + imgsFull.length - 1) % imgsFull.length,
                        })
                    }
                    onMoveNextRequest={() =>
                        setLightbox({
                            ...lightbox,
                            photoIndex: (lightbox.photoIndex + 1) % imgsFull.length,
                        })
                    }
                />
            )} 
        </>
    )
}


// const Galeria = ({setLightbox})=>{

//     const [optionMenu,setOptionMenu] = useState({all:'filter-active'});


//     const changeOption = (option)=>{
//         setOptionMenu({[option]:'filter-active'});
//     }

//     return(
//         <section id="portfolio"  className="portfolio section-bg">
//             <div className="container">

//                 <div className="section-title">
//                     <h2>Portfolio</h2>
//                     <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
//                 </div>

//                 <div className="row">
//                     <div className="col-lg-12 d-flex justify-content-center">
//                         <ul id="portfolio-flters">
//                             <li className={optionMenu.all} onClick={()=>changeOption('all')}>All</li>
//                             <li className={optionMenu.filterApp} onClick={()=>changeOption('filterApp')}>App</li>
//                             <li className={optionMenu.filterCard} onClick={()=>changeOption('filterCard')}>Card</li>
//                             <li className={optionMenu.filterWeb} onClick={()=>changeOption('filterWeb')}>Web</li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="row portfolio-container">

//                     {
//                         imgsFull.map( (img,index)=>(
//                             <div 
//                                 key={index}
//                                 className={`col-lg-4 col-md-6 portfolio-item ${(optionMenu.hasOwnProperty('all') || optionMenu.hasOwnProperty(group[index])) ? 'wow slideInUp' : 'd-none'}`} 
//                                 data-wow-duration={`${1 * index / 10 + 1}s`}
                             
//                                 onClick={()=> setLightbox({photoIndex:index,isOpen:true})} >
//                                 <div className="portfolio-wrap">
//                                     <img src={img} className="img-fluid" alt="img" loading="lazy" />
//                                     {/* <div className="portfolio-links">
//                                         <span><i className="fas fa-user-edit"></i></span>
//                                         <span><i className="fas fa-info"></i></span>
//                                     </div> */}
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div> 

//             </div>
//         </section>
//     )
// }

const IsotopeReact = ({setLightbox}) => {

    const [optionMenu,setOptionMenu] = useState({all:''});
    const isotope = useRef();
  
    useEffect(() => {
        isotope.current = new window.Isotope('.portfolio-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows'
        });
        return () => isotope.current.destroy()
    }, [isotope])

    //la primera vez que carga no se muestran correctamente las imagenes, pero al dar el primer click se corrige la visualización
    useEffect(() => {
        setTimeout(()=>{
            handleFilterKeyChange('all');
        },150)
    }, []);

    const handleFilterKeyChange = (key) =>{
        key === "all" ? isotope.current.arrange({filter: `*`}) : isotope.current.arrange({filter: `.${key}`});
        setOptionMenu({[key]:'filter-active'});
    } 
    
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li className={optionMenu.all} onClick={()=>handleFilterKeyChange('all')}>All</li>
                            <li className={optionMenu.filterApp} onClick={()=>handleFilterKeyChange('filterApp')}>App</li>
                            <li className={optionMenu.filterCard} onClick={()=>handleFilterKeyChange('filterCard')}>Card</li>
                            <li className={optionMenu.filterWeb} onClick={()=>handleFilterKeyChange('filterWeb')}>Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container">
                    {
                        imgsFull.map( (img,index)=>(
                            <div 
                                key={index}
                                className={`col-lg-4 col-md-6 portfolio-item filter-item ${group[index]}`} 
                                onClick={()=> setLightbox({photoIndex:index,isOpen:true})} >
                                <div className="portfolio-wrap">
                                    <img src={img} className="img-fluid" alt="img" loading="lazy" />
                                </div>
                            </div>
                        ))
                    }
                </div> 
            </div>
        </section>
    )
   
}