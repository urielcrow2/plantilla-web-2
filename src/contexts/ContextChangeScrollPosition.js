import {createContext,useState,useEffect} from 'react';

export const ContextChangeScrollPosition = createContext();

export const ChangeScrollPositionProvider = ({children})=>{

    const [scrollPosition, setScrollPosition] = useState(0);

      useEffect(() => {
        const updatePosition = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', updatePosition);
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return (
        <ContextChangeScrollPosition.Provider value={{
            scrollPosition
        }}>
            {children}
        </ContextChangeScrollPosition.Provider>
    )
}

