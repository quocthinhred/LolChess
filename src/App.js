import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header/header'
import NavBody from './Components/NavBody/navbody';
import React from 'react';
import ScrollingText from './Components/ScrollingText/scrollingtext';
import ChampionTab from './Components/ChampionTab/championtab';
import Footer from './Components/Footer/footer';
import BuilderTab from './Components/BuilderTab/buildertab';
import ItemTab from './Components/ItemTab/itemtab';
import RoundTab from './Components/RoundTab/roundtab';
import RollTab from './Components/RollTab/rolltab';
import TraitTab from './Components/TraitTab/traittab';
import KeyTab from './Components/KeyTab/keytab';
import PetTab from './Components/PetTab/pettab';
import UpdateTab from './Components/UpdateTab/updatetab';
import MetaTab from './Components/MetaTab/metatab';
import GoldTab from './Components/GoldTab/goldtab';





function App() {
  return (
    <div style={{ backgroundColor: '#1e1d32' }}>
      <div>
        <Header />
        <NavBody />
        <ScrollingText />
      </div>
      <div style={{ marginTop: '100px' }}>
        <Routes>
          <Route path='/' element={<MetaTab />} /> 
          <Route path='/builder' element={<BuilderTab />} /> 
          <Route path='/champion' element={<ChampionTab />} /> 
          <Route path='/item' element={<ItemTab />} /> 
          <Route path='/round' element={<RoundTab />} /> 
          <Route path='/roll' element={<RollTab />} /> 
          <Route path='/trait' element={<TraitTab />} /> 
          <Route path='/gold' element={<GoldTab />} /> 
          <Route path='/key' element={<KeyTab />} /> 
          <Route path='/pet' element={<PetTab />} /> 
          <Route path='/update' element={<UpdateTab />} /> 
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
