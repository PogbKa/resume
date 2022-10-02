import SectionRight from './components/SectionRight';
import SectionLeft from './components/SectionLeft';
import Popup from './components/Popup';

import './App.scss';


function App() {
  console.log(window.location.pathname)
  return (
    <section className="wraper-out">
      <SectionLeft/>
      <SectionRight/>
      <Popup/>
    </section>
  );
}

export default App;
