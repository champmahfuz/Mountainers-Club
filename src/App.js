import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Profiles from './components/Profiles/Profiles';

function App() {
  useEffect(() => {
    fetch('./mountainer.JSON')
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <Profiles></Profiles>
    </div>
  );
}

export default App;
