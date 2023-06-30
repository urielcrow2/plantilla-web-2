//import {useEffect} from 'react';
//import WOW from 'wowjs';
import { RoutApp } from './routes/RoutApp';
import { ChangeScrollPositionProvider } from './contexts/ContextChangeScrollPosition';

import './index.css';
import './components/layout/layout.css';

function App() {

  // useEffect(()=>{
  //     new WOW.WOW({
  //         live: false
  //     }).init();
  // },[]);

  return (
    
    <ChangeScrollPositionProvider>
      <RoutApp />
    </ChangeScrollPositionProvider>
   
  );
}



export default App;
