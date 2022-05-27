import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './Router';
import Footer from './components/Footer';
import ScrollTop from './ScrollTop';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    
    <ScrollTop/>
        <Router />
        
    </BrowserRouter>
    </div>
    
  );
};

export default App;