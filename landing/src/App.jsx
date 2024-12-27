import './App.css';
import Clients from './components/Clients';
import Community from './components/Community';
import Header from './components/Header';
import Marketing from './components/Marketing';
import PixelGrade from './components/PixelGrade';
import Question from './components/Question';
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
     <Question/>
     <Marketing/>
    </div>
  );
}

export default App;
