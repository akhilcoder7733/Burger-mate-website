import React from 'react';
import LayoutRoutes from './LayoutRoutes/LayoutRoutes';
import Aos from 'aos';
import "aos/dist/aos.css";
import { AuthContextProvider } from './Firebase/AuthContext';

Aos.init();

function App() {
  return (
    <div>
      <AuthContextProvider>
        <LayoutRoutes/>
      </AuthContextProvider>
    </div>
  )
}

export default App;
