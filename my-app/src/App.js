import './App.css';
import React from 'react';
import CharacterCardList from './CharacterCardList';
import Header from './Header';
import Footer from './Footer';

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
