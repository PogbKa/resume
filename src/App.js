import SectionRight from './components/SectionRight';
import SectionLeft from './components/SectionLeft';
import Popup from './components/Popup';

import './App.scss';


function App() {
  return (
    <section className="wraper-out">
      <SectionLeft/>
      <SectionRight/>
      <Popup/>
    </section>
  );
}

export default App;
