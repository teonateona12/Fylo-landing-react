import "./App.css";
import Menu from "./components/Menu"
import FirstForm from "./components/FirstForm"
import Section from "./components/Section"
import SecondForm from "./components/SecondForm"
import Footer from './components/Footer'


function App() {
  return (
    <div>
        <Menu/>
        <FirstForm/> 
        <Section/>
        <SecondForm/>
        <Footer/>
    </div>
  );
}

export default App;
