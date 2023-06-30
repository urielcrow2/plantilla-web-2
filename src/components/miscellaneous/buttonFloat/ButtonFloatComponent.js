import { useContext } from 'react';
import { animateScroll } from 'react-scroll';
import './buttonFloat.css';
import { ContextChangeScrollPosition } from '../../../contexts/ContextChangeScrollPosition';
import { identifyDevice } from '../../../utiles/identifyDevice';



export const ButtonFloat = ( {hight=500}) =>{

    const { scrollPosition } = useContext(ContextChangeScrollPosition);

    const goTop = ()=>{
        if(identifyDevice() === 'mobile')
            window.scrollTo(0,0);
        else
            animateScroll.scrollTo(0);
    }

    return (
        scrollPosition > hight 
        ? 
            <span className="back-to-top" onClick={goTop}>
                <i className="fas fa-angle-up fa-2x" title="Arriba"></i>
            </span> 
        :
            <></>
    )
}
