import {createContext,useState,useEffect} from 'react';

export const ContextChangeWidth = createContext();

export const ChangeWidthProvider = ({children})=>{

    const [widthScreen,setWidthScreen] = useState(window.innerWidth);

      useEffect(() => {
        const mifuncion = ()=> setWidthScreen( window.innerWidth );
        window.addEventListener('resize',mifuncion);
        return () => window.removeEventListener('resize',mifuncion);
    }, []);

    return (
        <ContextChangeWidth.Provider value={{
            widthScreen
        }}>
            {children}
        </ContextChangeWidth.Provider>
    )
}

