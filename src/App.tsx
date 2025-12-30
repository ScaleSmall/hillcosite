import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { safeLazy } from './utils/safeLazy';
import Trace from './utils/Trace';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Lazy load non-critical pages for better performance
const About = safeLazy(() => import('./pages/About'), "About");
const Services = safeLazy(() => import('./pages/Services'), "Services");
const InteriorPainting = safeLazy(() => import('./pages/services/InteriorPainting'), "InteriorPainting");
const ExteriorPainting = safeLazy(() => import('./pages/services/ExteriorPainting'), "ExteriorPainting");
const CabinetRefinishing = safeLazy(() => import('./pages/services/CabinetRefinishing'), "CabinetRefinishing");
const CommercialPainting = safeLazy(() => import('./pages/services/CommercialPainting'), "CommercialPainting");
const Gallery = safeLazy(() => import('./pages/Gallery'), "Gallery");
const Testimonials = safeLazy(() => import('./pages/Testimonials'), "Testimonials");
const FAQ = safeLazy(() => import('./pages/FAQ'), "FAQ");
const ServiceAreas = safeLazy(() => import('./pages/ServiceAreas'), "ServiceAreas");
const Austin = safeLazy(() => import('./pages/service-areas/Austin'), "Austin");
const WestLakeHills = safeLazy(() => import('./pages/service-areas/WestLakeHills'), "WestLakeHills");
const RoundRockGeorgetown = safeLazy(() => import('./pages/service-areas/RoundRockGeorgetown'), "RoundRockGeorgetown");
const PflugervilleWellsBranch = safeLazy(() => import('./pages/service-areas/PflugervilleWellsBranch'), "PflugervilleWellsBranch");
const CedarPark = safeLazy(() => import('./pages/service-areas/CedarPark'), "CedarPark");
const Leander = safeLazy(() => import('./pages/service-areas/Leander'), "Leander");
const TaylorHutto = safeLazy(() => import('./pages/service-areas/TaylorHutto'), "TaylorHutto");
const Contact = safeLazy(() => import('./pages/Contact'), "Contact");
const Financing = safeLazy(() => import('./pages/Financing'), "Financing");
const Blog = safeLazy(() => import('./pages/Blog'), "Blog");
const BlogPost = safeLazy(() => import('./pages/BlogPost'), "BlogPost");
const ColorConsultation = safeLazy(() => import('./pages/ColorConsultation'), "ColorConsultation");
const Privacy = safeLazy(() => import('./pages/Privacy'), "Privacy");
const Terms = safeLazy(() => import('./pages/Terms'), "Terms");
const DoNotSell = safeLazy(() => import('./pages/DoNotSell'), "DoNotSell");
const PaintingCosts = safeLazy(() => import('./pages/guides/PaintingCosts'), "PaintingCosts");
const BestPaintTexasHeat = safeLazy(() => import('./pages/guides/BestPaintTexasHeat'), "BestPaintTexasHeat");
const HOAColorTips = safeLazy(() => import('./pages/guides/HOAColorTips'), "HOAColorTips");
const PaintingFrequency = safeLazy(() => import('./pages/guides/PaintingFrequency'), "PaintingFrequency");
const Search = safeLazy(() => import('./pages/Search'), "Search");
const ThankYou = safeLazy(() => import('./pages/ThankYou'), "ThankYou");
const NotFound = safeLazy(() => import('./pages/NotFound'), "NotFound");

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="loading-skeleton w-full max-w-4xl h-96 rounded-lg"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
        <SkipLink />
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <main id="main">
            <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Trace name="/"><Home /></Trace>} />
              <Route path="/about" element={<Trace name="/about"><About /></Trace>} />
              <Route path="/services" element={<Trace name="/services"><Services /></Trace>} />
              <Route path="/services/interior-painting" element={<Trace name="/services/interior-painting"><InteriorPainting /></Trace>} />
              <Route path="/services/exterior-painting" element={<Trace name="/services/exterior-painting"><ExteriorPainting /></Trace>} />
              <Route path="/services/cabinet-refinishing" element={<Trace name="/services/cabinet-refinishing"><CabinetRefinishing /></Trace>} />
              <Route path="/services/commercial" element={<Trace name="/services/commercial"><CommercialPainting /></Trace>} />
              <Route path="/gallery" element={<Trace name="/gallery"><Gallery /></Trace>} />
              <Route path="/testimonials" element={<Trace name="/testimonials"><Testimonials /></Trace>} />
              <Route path="/faq" element={<Trace name="/faq"><FAQ /></Trace>} />
              <Route path="/service-areas" element={<Trace name="/service-areas"><ServiceAreas /></Trace>} />
              <Route path="/service-areas/austin" element={<Trace name="/service-areas/austin"><Austin /></Trace>} />
              <Route path="/service-areas/round-rock-georgetown" element={<Trace name="/service-areas/round-rock-georgetown"><RoundRockGeorgetown /></Trace>} />
              <Route path="/service-areas/pflugerville-wells-branch" element={<Trace name="/service-areas/pflugerville-wells-branch"><PflugervilleWellsBranch /></Trace>} />
              <Route path="/service-areas/cedar-park" element={<Trace name="/service-areas/cedar-park"><CedarPark /></Trace>} />
              <Route path="/service-areas/taylor-hutto" element={<Trace name="/service-areas/taylor-hutto"><TaylorHutto /></Trace>} />
              <Route path="/service-areas/leander" element={<Trace name="/service-areas/leander"><Leander /></Trace>} />
              <Route path="/service-areas/west-lake-hills" element={<Trace name="/service-areas/west-lake-hills"><WestLakeHills /></Trace>} />
              <Route path="/color-consultation" element={<Trace name="/color-consultation"><ColorConsultation /></Trace>} />
              <Route path="/contact" element={<Trace name="/contact"><Contact /></Trace>} />
              <Route path="/financing" element={<Trace name="/financing"><Financing /></Trace>} />
              <Route path="/blog" element={<Trace name="/blog"><Blog /></Trace>} />
              <Route path="/blog/:slug" element={<Trace name="/blog/:slug"><BlogPost /></Trace>} />
              <Route path="/guides/painting-costs-round-rock" element={<Trace name="/guides/painting-costs-round-rock"><PaintingCosts /></Trace>} />
              <Route path="/guides/best-paint-texas-heat" element={<Trace name="/guides/best-paint-texas-heat"><BestPaintTexasHeat /></Trace>} />
              <Route path="/guides/hoa-color-tips-round-rock" element={<Trace name="/guides/hoa-color-tips-round-rock"><HOAColorTips /></Trace>} />
              <Route path="/guides/how-often-paint-central-texas" element={<Trace name="/guides/how-often-paint-central-texas"><PaintingFrequency /></Trace>} />
              <Route path="/search" element={<Trace name="/search"><Search /></Trace>} />
              <Route path="/privacy" element={<Trace name="/privacy"><Privacy /></Trace>} />
              <Route path="/terms" element={<Trace name="/terms"><Terms /></Trace>} />
              <Route path="/do-not-sell" element={<Trace name="/do-not-sell"><DoNotSell /></Trace>} />
              <Route path="/thank-you" element={<Trace name="/thank-you"><ThankYou /></Trace>} />
              <Route path="*" element={<Trace name="*"><NotFound /></Trace>} />
            </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;