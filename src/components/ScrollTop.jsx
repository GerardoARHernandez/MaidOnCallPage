import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana hacia arriba
  }, [pathname]);

  return null; // Este componente no renderiza nada
};

export default ScrollTop;