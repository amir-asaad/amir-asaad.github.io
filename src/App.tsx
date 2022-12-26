import './App.css';
import Contacts from './sections/Contacts/component/Contacts';
import Projects from './sections/Projects/components/Projects';

function App() {
  return (
    <div className="App">
      <Projects />
      <hr className="mb-8" />
      <Contacts />
    </div>
  );
}

export default App;
