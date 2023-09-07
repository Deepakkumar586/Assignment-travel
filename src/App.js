import logo from './logo.svg';
import './App.css';
import Place from './components/Place';
import Agra from '../src/assets/Agra.jpg'
import Lucknow from '../src/assets/Lucknow.jpg'
import Mumbai from '../src/assets/Mumbai.jpg'
import Bengluru from '../src/assets/bengluru.jpg'

function App() {
  return (
    <div className="App">
     
       <div className='container'>
        <Place destinationName="Agra" img={Agra} rating="6.8" description=" Agra, a city in the northern Indian state of Uttar Pradesh, is globally renowned primarily for the Taj Mahal"/>
        <Place destinationName="Lucknow" img={Lucknow} rating="7.8" description="Lucknow, the capital city of the Indian state of Uttar Pradesh, is known for its rich history, "/>
        <Place destinationName="Mumbai" img={Mumbai} rating="8.9" description="Mumbai, formerly known as Bombay, is the capital city of the Indian state of Maharashtra"/>
        <Place destinationName="Bengluru" img={Bengluru} rating="9.1" description={"Known as the \"Silicon Valley of India\" because of its prominent role in the country's IT industry"}/>
       </div>
   
    </div>
  );
}

export default App;
