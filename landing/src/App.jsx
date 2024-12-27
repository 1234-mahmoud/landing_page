import './App.css';
import Clients from './components/Clients';
import Community from './components/Community';
import Header from './components/Header';
import MySlider from './Slider/MySlider';
function App() {
  return (
    <div className="App">
     <Header/>
     <MySlider/>
     <Clients/>
     <Community/>
    </div>
  );
}

export default App;
