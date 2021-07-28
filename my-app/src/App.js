import './App.css';
import React from 'react';
import CharacterCardList from './Components/CharacterCardList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './index.css';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <CharacterCardList></CharacterCardList>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
