import React from 'react';
import Header from './components/Header';
import "./styles.css"
import Main from './pages/main';

const App= () =>( 
    <div className="App">
      <div id="header" className="header">
     <Header />
     </div>
      <div id="content" className="content">
       <Main/>
       </div>
    </div>
  );


export default App;