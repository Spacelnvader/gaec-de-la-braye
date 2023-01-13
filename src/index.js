import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accueil from './pages/Accueil';
import BlondedAquitaine from './pages/BlondedAquitaine';
import Colis from './pages/Colis';
import Contact from './pages/Contact';
import Page404 from './pages/Page404.jsx';
import IdeeRecette from './pages/IdeeRecette';
import ProduitsTransformés from './pages/ProduitsTransformés';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />  
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/blondedaquitaine" element={<BlondedAquitaine />} />
          <Route path="/noscolis" element={<Colis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/idéesrecettes" element={<IdeeRecette />} />
          <Route path="/produits" element={<ProduitsTransformés />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();