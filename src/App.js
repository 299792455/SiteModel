import Header from './components/header';
import Footer from './components/footer';
import HomeBanner from './components/homeBanner';
import ContactForm from './components/contactForm'
import About from './components/bio';
import './App.css';
import BeatPlaylist from './components/beats';
import Agenda from './components/agenda'
import bgBeat from './style/Medias/vidBeats.mp4';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main>
          <section id="banner">
            <HomeBanner />
          </section>
          <section id="Bio">
            <div className="max-width-container"> {/* Conteneur pour About et Beats */}
              <About />
              <BeatPlaylist />
            </div>
          </section>
          <section id='video'>
            <div className="video-container">
              <video
                src={bgBeat}
                autoPlay
                loop
                muted
                playsInline
                className="background-video"
              />
              {/* Superposition des scanlines */}
              <div className="scanlines"></div>
            </div>
          </section>
          <section id="Agenda">
            <div className="max-width-container"> {/* Conteneur pour Agenda */}
              <Agenda />
            </div>
            <div id="Contact"> {/* ContactForm sans limitation */}
              <ContactForm />
            </div>
          </section>
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
//<img src={logo} className="App-logo" alt="logo" />