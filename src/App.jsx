import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

// Lazy load below-the-fold components
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>}>
          <Services />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}

export default App;
