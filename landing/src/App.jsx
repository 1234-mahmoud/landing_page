import './App.css';
import Clients from './components/Clients';
import Community from './components/Community';
import Header from './components/Header';
import PixelGrade from './components/PixelGrade';
import Statistics from './components/Statistics';
import MySlider from './Slider/MySlider';
function App() {
  return (
    <div className="App">
     <Header/>
     <MySlider/>
     <Clients/>
     <Community/>
     <PixelGrade/>
     <Statistics/>
    </div>
  );
}

export default App;
