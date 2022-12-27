import './App.css';
import About from './sections/About/components/About';
import Contacts from './sections/Contacts/component/Contacts';
import Footer from './sections/Footer/components/Footer';
import Greeting from './sections/Greeting/components/Greeting';
import Projects from './sections/Projects/components/Projects';

function App() {
  return (
    <div>
      <div className="App">
        <Greeting />
        <hr className="mb-8" />
        <About />
        <hr className="mb-8" />
        <Projects />
        <hr className="mb-8" />
        <Contacts />
      </div>
      <hr className="mb-8" />
      <Footer />
    </div>
  );
}

export default App;
