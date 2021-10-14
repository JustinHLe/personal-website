import './App.css';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <>
      <Navbar/>
      <section className="home">
        <Home/>
      </section>
      <section className="about">
        <About/>
      </section>
      <div className="img2"></div>
      <section className="exp">
        <Experience/>
      </section>
      <section className="projects">

      </section>
      <section className="contact">

      </section>
    </>
  );
}

export default App;
