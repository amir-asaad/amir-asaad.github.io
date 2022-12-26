import './App.css';
import Contacts from './sections/Contacts/component/Contacts';
import Greeting from './sections/Greeting/components/Greeting';
import Projects from './sections/Projects/components/Projects';

function App() {
  return (
    <div className="App">
      <Greeting />
      <hr className="mb-8" />
      <Projects />
      <hr className="mb-8" />
      <Contacts />
    </div>
  );
}

export default App;
