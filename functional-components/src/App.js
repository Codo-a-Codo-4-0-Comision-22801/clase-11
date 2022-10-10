import logo from './logo.svg';
import image from "./assets/img/netflix.png";
import './App.css';
import {Sound} from './component/sound/Sound';
import {Video} from './component/video/Video';
import aud from './assets/audio/ANBR - Learn to Fly.mp3';
import vid from './assets/video/VID-20211231-WA0118.mp4';

//import HelloWorld from './component/banner/Banner';
import { Banner as Saludo } from './component/banner/Banner';
//import './component/banner/Banner';//Traigo todo lo que tengo en Banner.js
import Navbar from'./component/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Saludo msg="Hola Mundo!"/>
      <Navbar src={image} size={40}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      <Sound src={aud} type='audio/mpeg' />
        <br />
      <Video src={vid} type='video/mp4' />
        <br />

        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//HelloWorld();

export default App;
