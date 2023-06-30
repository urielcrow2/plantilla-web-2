
export const identifyDevice = ()=>{
    const navegador = navigator.userAgent;

    if (    navegador.match(/Android/i) || 
            navegador.match(/webOS/i) || 
            navegador.match(/iPhone/i) || 
            navegador.match(/iPad/i) || 
            navegador.match(/iPod/i) || 
            navegador.match(/BlackBerry/i) || 
            navegador.match(/Windows Phone/i)
        ) 
        return 'mobile';
    
    return 'no-mobile';
}