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

// GEO AREA PAGES (54 total: 9 hubs + 45 neighborhoods)
const HubSteinerRanch78732 = safeLazy(() => import('./pages/areas/steiner-ranch-78732'), "HubSteinerRanch78732");
const NeighborhoodSteinerRanch78732RobRoy = safeLazy(() => import('./pages/areas/steiner-ranch-78732/rob-roy'), "NeighborhoodSteinerRanch78732RobRoy");
const NeighborhoodSteinerRanch78732DavenportRanch = safeLazy(() => import('./pages/areas/steiner-ranch-78732/davenport-ranch'), "NeighborhoodSteinerRanch78732DavenportRanch");
const NeighborhoodSteinerRanch78732RiverPlace = safeLazy(() => import('./pages/areas/steiner-ranch-78732/river-place'), "NeighborhoodSteinerRanch78732RiverPlace");
const NeighborhoodSteinerRanch78732BarclayPlace = safeLazy(() => import('./pages/areas/steiner-ranch-78732/barclay-place'), "NeighborhoodSteinerRanch78732BarclayPlace");
const NeighborhoodSteinerRanch78732ChaparralCliffside = safeLazy(() => import('./pages/areas/steiner-ranch-78732/chaparral-cliffside'), "NeighborhoodSteinerRanch78732ChaparralCliffside");
const HubWestLakeHillsAndRollingwood = safeLazy(() => import('./pages/areas/west-lake-hills-and-rollingwood'), "HubWestLakeHillsAndRollingwood");
const NeighborhoodWestLakeHillsAndRollingwoodRollingwood = safeLazy(() => import('./pages/areas/west-lake-hills-and-rollingwood/rollingwood'), "NeighborhoodWestLakeHillsAndRollingwoodRollingwood");
const NeighborhoodWestLakeHillsAndRollingwoodWestLakeHills = safeLazy(() => import('./pages/areas/west-lake-hills-and-rollingwood/west-lake-hills'), "NeighborhoodWestLakeHillsAndRollingwoodWestLakeHills");
const NeighborhoodWestLakeHillsAndRollingwoodSpanishOaks = safeLazy(() => import('./pages/areas/west-lake-hills-and-rollingwood/spanish-oaks'), "NeighborhoodWestLakeHillsAndRollingwoodSpanishOaks");
const NeighborhoodWestLakeHillsAndRollingwoodDavenportRanch = safeLazy(() => import('./pages/areas/west-lake-hills-and-rollingwood/davenport-ranch-west'), "NeighborhoodWestLakeHillsAndRollingwoodDavenportRanch");
const NeighborhoodWestLakeHillsAndRollingwoodLakeAustinHills = safeLazy(() => import('./pages/areas/west-lake-hills-and-rollingwood/lake-austin-hills'), "NeighborhoodWestLakeHillsAndRollingwoodLakeAustinHills");
const HubBartonCreek = safeLazy(() => import('./pages/areas/barton-creek'), "HubBartonCreek");
const NeighborhoodBartonCreekBartonCreekCountryClubEstates = safeLazy(() => import('./pages/areas/barton-creek/barton-creek-country-club-estates'), "NeighborhoodBartonCreekBartonCreekCountryClubEstates");
const NeighborhoodBartonCreekFazioFoothillsCliffside = safeLazy(() => import('./pages/areas/barton-creek/fazio-foothills-cliffside'), "NeighborhoodBartonCreekFazioFoothillsCliffside");
const NeighborhoodBartonCreekSpyglassBartonsBluff = safeLazy(() => import('./pages/areas/barton-creek/spyglass-bartons-bluff'), "NeighborhoodBartonCreekSpyglassBartonsBluff");
const NeighborhoodBartonCreekLakeAustinWestEstates = safeLazy(() => import('./pages/areas/barton-creek/lake-austin-west-estates'), "NeighborhoodBartonCreekLakeAustinWestEstates");
const NeighborhoodBartonCreekBartonCreekWest = safeLazy(() => import('./pages/areas/barton-creek/barton-creek-west'), "NeighborhoodBartonCreekBartonCreekWest");
const HubTarrytown = safeLazy(() => import('./pages/areas/tarrytown'), "HubTarrytown");
const NeighborhoodTarrytownTarrytown = safeLazy(() => import('./pages/areas/tarrytown/tarrytown'), "NeighborhoodTarrytownTarrytown");
const NeighborhoodTarrytownOldEnfield = safeLazy(() => import('./pages/areas/tarrytown/old-enfield'), "NeighborhoodTarrytownOldEnfield");
const NeighborhoodTarrytownPembertonHeights = safeLazy(() => import('./pages/areas/tarrytown/pemberton-heights'), "NeighborhoodTarrytownPembertonHeights");
const NeighborhoodTarrytownBrykerWoods = safeLazy(() => import('./pages/areas/tarrytown/bryker-woods'), "NeighborhoodTarrytownBrykerWoods");
const NeighborhoodTarrytownClarksville = safeLazy(() => import('./pages/areas/tarrytown/clarksville'), "NeighborhoodTarrytownClarksville");
const HubDowntownAustinLuxury = safeLazy(() => import('./pages/areas/downtown-austin-luxury'), "HubDowntownAustinLuxury");
const NeighborhoodDowntownAustinLuxuryDowntownCore78701 = safeLazy(() => import('./pages/areas/downtown-austin-luxury/downtown-core-78701'), "NeighborhoodDowntownAustinLuxuryDowntownCore78701");
const NeighborhoodDowntownAustinLuxuryRaineyStreetDistrict = safeLazy(() => import('./pages/areas/downtown-austin-luxury/rainey-street-district'), "NeighborhoodDowntownAustinLuxuryRaineyStreetDistrict");
const NeighborhoodDowntownAustinLuxuryOldWestAustin = safeLazy(() => import('./pages/areas/downtown-austin-luxury/old-west-austin-central'), "NeighborhoodDowntownAustinLuxuryOldWestAustin");
const NeighborhoodDowntownAustinLuxuryZilker = safeLazy(() => import('./pages/areas/downtown-austin-luxury/zilker'), "NeighborhoodDowntownAustinLuxuryZilker");
const NeighborhoodDowntownAustinLuxuryClarksville = safeLazy(() => import('./pages/areas/downtown-austin-luxury/clarksville-west'), "NeighborhoodDowntownAustinLuxuryClarksville");
const HubAllandaleAndNorthwestHills = safeLazy(() => import('./pages/areas/allandale-and-northwest-hills'), "HubAllandaleAndNorthwestHills");
const NeighborhoodAllandaleAndNorthwestHillsAllandale = safeLazy(() => import('./pages/areas/allandale-and-northwest-hills/allandale'), "NeighborhoodAllandaleAndNorthwestHillsAllandale");
const NeighborhoodAllandaleAndNorthwestHillsNorthwestHills = safeLazy(() => import('./pages/areas/allandale-and-northwest-hills/northwest-hills'), "NeighborhoodAllandaleAndNorthwestHillsNorthwestHills");
const NeighborhoodAllandaleAndNorthwestHillsCrestview = safeLazy(() => import('./pages/areas/allandale-and-northwest-hills/crestview'), "NeighborhoodAllandaleAndNorthwestHillsCrestview");
const NeighborhoodAllandaleAndNorthwestHillsQuailCreek = safeLazy(() => import('./pages/areas/allandale-and-northwest-hills/quail-creek'), "NeighborhoodAllandaleAndNorthwestHillsQuailCreek");
const NeighborhoodAllandaleAndNorthwestHillsTriangleNorthLamar = safeLazy(() => import('./pages/areas/allandale-and-northwest-hills/triangle-north-lamar'), "NeighborhoodAllandaleAndNorthwestHillsTriangleNorthLamar");
const HubLakewayBeeCaveAndLakeTravis = safeLazy(() => import('./pages/areas/lakeway-bee-cave-and-lake-travis'), "HubLakewayBeeCaveAndLakeTravis");
const NeighborhoodLakewayBeeCaveAndLakeTravisLakeway = safeLazy(() => import('./pages/areas/lakeway-bee-cave-and-lake-travis/lakeway'), "NeighborhoodLakewayBeeCaveAndLakeTravisLakeway");
const NeighborhoodLakewayBeeCaveAndLakeTravisRoughHollow = safeLazy(() => import('./pages/areas/lakeway-bee-cave-and-lake-travis/rough-hollow'), "NeighborhoodLakewayBeeCaveAndLakeTravisRoughHollow");
const NeighborhoodLakewayBeeCaveAndLakeTravisThePeninsulaAtRoughHollow = safeLazy(() => import('./pages/areas/lakeway-bee-cave-and-lake-travis/the-peninsula-at-rough-hollow'), "NeighborhoodLakewayBeeCaveAndLakeTravisThePeninsulaAtRoughHollow");
const NeighborhoodLakewayBeeCaveAndLakeTravisSerenityHills = safeLazy(() => import('./pages/areas/lakeway-bee-cave-and-lake-travis/serenity-hills'), "NeighborhoodLakewayBeeCaveAndLakeTravisSerenityHills");
const NeighborhoodLakewayBeeCaveAndLakeTravisBeeCave = safeLazy(() => import('./pages/areas/lakeway-bee-cave-and-lake-travis/bee-cave'), "NeighborhoodLakewayBeeCaveAndLakeTravisBeeCave");
const HubCircleCRanchAndSouthwestAustin = safeLazy(() => import('./pages/areas/circle-c-ranch-and-southwest-austin'), "HubCircleCRanchAndSouthwestAustin");
const NeighborhoodCircleCRanchAndSouthwestAustinCircleCRanch = safeLazy(() => import('./pages/areas/circle-c-ranch-and-southwest-austin/circle-c-ranch'), "NeighborhoodCircleCRanchAndSouthwestAustinCircleCRanch");
const NeighborhoodCircleCRanchAndSouthwestAustinGreyRock = safeLazy(() => import('./pages/areas/circle-c-ranch-and-southwest-austin/grey-rock'), "NeighborhoodCircleCRanchAndSouthwestAustinGreyRock");
const NeighborhoodCircleCRanchAndSouthwestAustinLostCreek = safeLazy(() => import('./pages/areas/circle-c-ranch-and-southwest-austin/lost-creek'), "NeighborhoodCircleCRanchAndSouthwestAustinLostCreek");
const NeighborhoodCircleCRanchAndSouthwestAustinShadyHollow = safeLazy(() => import('./pages/areas/circle-c-ranch-and-southwest-austin/shady-hollow'), "NeighborhoodCircleCRanchAndSouthwestAustinShadyHollow");
const NeighborhoodCircleCRanchAndSouthwestAustinWestOakHill = safeLazy(() => import('./pages/areas/circle-c-ranch-and-southwest-austin/west-oak-hill'), "NeighborhoodCircleCRanchAndSouthwestAustinWestOakHill");
const HubPembertonHeightsAndOldWestAustinHistoricLuxury = safeLazy(() => import('./pages/areas/pemberton-heights-and-old-west-austin-historic-luxury'), "HubPembertonHeightsAndOldWestAustinHistoricLuxury");
const NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryPembertonHeights = safeLazy(() => import('./pages/areas/pemberton-heights-and-old-west-austin-historic-luxury/pemberton-heights-south'), "NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryPembertonHeights");
const NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryOldEnfield = safeLazy(() => import('./pages/areas/pemberton-heights-and-old-west-austin-historic-luxury/old-enfield-west'), "NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryOldEnfield");
const NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryBrykerWoods = safeLazy(() => import('./pages/areas/pemberton-heights-and-old-west-austin-historic-luxury/bryker-woods-west'), "NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryBrykerWoods");
const NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryClarksville = safeLazy(() => import('./pages/areas/pemberton-heights-and-old-west-austin-historic-luxury/clarksville-historic'), "NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryClarksville");
const NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryOldWestAustin = safeLazy(() => import('./pages/areas/pemberton-heights-and-old-west-austin-historic-luxury/old-west-austin-historic'), "NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryOldWestAustin");

const Contact = safeLazy(() => import('./pages/Contact'), "Contact");
const Financing = safeLazy(() => import('./pages/Financing'), "Financing");
const PreApproval = safeLazy(() => import('./pages/PreApproval'), "PreApproval");
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

// SERVICE + LOCATION PAGES (36 total: 4 services x 9 locations)
const InteriorPaintingRoundRock = safeLazy(() => import('./pages/locations/InteriorPaintingRoundRock'), "InteriorPaintingRoundRock");
const InteriorPaintingGeorgetown = safeLazy(() => import('./pages/locations/InteriorPaintingGeorgetown'), "InteriorPaintingGeorgetown");
const InteriorPaintingCedarPark = safeLazy(() => import('./pages/locations/InteriorPaintingCedarPark'), "InteriorPaintingCedarPark");
const InteriorPaintingPflugerville = safeLazy(() => import('./pages/locations/InteriorPaintingPflugerville'), "InteriorPaintingPflugerville");
const InteriorPaintingLeander = safeLazy(() => import('./pages/locations/InteriorPaintingLeander'), "InteriorPaintingLeander");
const InteriorPaintingTaylor = safeLazy(() => import('./pages/locations/InteriorPaintingTaylor'), "InteriorPaintingTaylor");
const InteriorPaintingHutto = safeLazy(() => import('./pages/locations/InteriorPaintingHutto'), "InteriorPaintingHutto");
const InteriorPaintingAustin = safeLazy(() => import('./pages/locations/InteriorPaintingAustin'), "InteriorPaintingAustin");
const InteriorPaintingWestLakeHills = safeLazy(() => import('./pages/locations/InteriorPaintingWestLakeHills'), "InteriorPaintingWestLakeHills");
const ExteriorPaintingRoundRock = safeLazy(() => import('./pages/locations/ExteriorPaintingRoundRock'), "ExteriorPaintingRoundRock");
const ExteriorPaintingGeorgetown = safeLazy(() => import('./pages/locations/ExteriorPaintingGeorgetown'), "ExteriorPaintingGeorgetown");
const ExteriorPaintingCedarPark = safeLazy(() => import('./pages/locations/ExteriorPaintingCedarPark'), "ExteriorPaintingCedarPark");
const ExteriorPaintingPflugerville = safeLazy(() => import('./pages/locations/ExteriorPaintingPflugerville'), "ExteriorPaintingPflugerville");
const ExteriorPaintingLeander = safeLazy(() => import('./pages/locations/ExteriorPaintingLeander'), "ExteriorPaintingLeander");
const ExteriorPaintingTaylor = safeLazy(() => import('./pages/locations/ExteriorPaintingTaylor'), "ExteriorPaintingTaylor");
const ExteriorPaintingHutto = safeLazy(() => import('./pages/locations/ExteriorPaintingHutto'), "ExteriorPaintingHutto");
const ExteriorPaintingAustin = safeLazy(() => import('./pages/locations/ExteriorPaintingAustin'), "ExteriorPaintingAustin");
const ExteriorPaintingWestLakeHills = safeLazy(() => import('./pages/locations/ExteriorPaintingWestLakeHills'), "ExteriorPaintingWestLakeHills");
const CabinetRefinishingRoundRock = safeLazy(() => import('./pages/locations/CabinetRefinishingRoundRock'), "CabinetRefinishingRoundRock");
const CabinetRefinishingGeorgetown = safeLazy(() => import('./pages/locations/CabinetRefinishingGeorgetown'), "CabinetRefinishingGeorgetown");
const CabinetRefinishingCedarPark = safeLazy(() => import('./pages/locations/CabinetRefinishingCedarPark'), "CabinetRefinishingCedarPark");
const CabinetRefinishingPflugerville = safeLazy(() => import('./pages/locations/CabinetRefinishingPflugerville'), "CabinetRefinishingPflugerville");
const CabinetRefinishingLeander = safeLazy(() => import('./pages/locations/CabinetRefinishingLeander'), "CabinetRefinishingLeander");
const CabinetRefinishingTaylor = safeLazy(() => import('./pages/locations/CabinetRefinishingTaylor'), "CabinetRefinishingTaylor");
const CabinetRefinishingHutto = safeLazy(() => import('./pages/locations/CabinetRefinishingHutto'), "CabinetRefinishingHutto");
const CabinetRefinishingAustin = safeLazy(() => import('./pages/locations/CabinetRefinishingAustin'), "CabinetRefinishingAustin");
const CabinetRefinishingWestLakeHills = safeLazy(() => import('./pages/locations/CabinetRefinishingWestLakeHills'), "CabinetRefinishingWestLakeHills");
const CommercialPaintingRoundRock = safeLazy(() => import('./pages/locations/CommercialPaintingRoundRock'), "CommercialPaintingRoundRock");
const CommercialPaintingGeorgetown = safeLazy(() => import('./pages/locations/CommercialPaintingGeorgetown'), "CommercialPaintingGeorgetown");
const CommercialPaintingCedarPark = safeLazy(() => import('./pages/locations/CommercialPaintingCedarPark'), "CommercialPaintingCedarPark");
const CommercialPaintingPflugerville = safeLazy(() => import('./pages/locations/CommercialPaintingPflugerville'), "CommercialPaintingPflugerville");
const CommercialPaintingLeander = safeLazy(() => import('./pages/locations/CommercialPaintingLeander'), "CommercialPaintingLeander");
const CommercialPaintingTaylor = safeLazy(() => import('./pages/locations/CommercialPaintingTaylor'), "CommercialPaintingTaylor");
const CommercialPaintingHutto = safeLazy(() => import('./pages/locations/CommercialPaintingHutto'), "CommercialPaintingHutto");
const CommercialPaintingAustin = safeLazy(() => import('./pages/locations/CommercialPaintingAustin'), "CommercialPaintingAustin");
const CommercialPaintingWestLakeHills = safeLazy(() => import('./pages/locations/CommercialPaintingWestLakeHills'), "CommercialPaintingWestLakeHills");

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
              <Route path="/pre-approval" element={<Trace name="/pre-approval"><PreApproval /></Trace>} />
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

              {/* GEO AREA PAGES - 54 total: 9 hubs + 45 neighborhoods */}
              <Route path="/areas/steiner-ranch-78732" element={<Trace name="/areas/steiner-ranch-78732"><HubSteinerRanch78732 /></Trace>} />
              <Route path="/areas/steiner-ranch-78732/rob-roy" element={<Trace name="/areas/steiner-ranch-78732/rob-roy"><NeighborhoodSteinerRanch78732RobRoy /></Trace>} />
              <Route path="/areas/steiner-ranch-78732/davenport-ranch" element={<Trace name="/areas/steiner-ranch-78732/davenport-ranch"><NeighborhoodSteinerRanch78732DavenportRanch /></Trace>} />
              <Route path="/areas/steiner-ranch-78732/river-place" element={<Trace name="/areas/steiner-ranch-78732/river-place"><NeighborhoodSteinerRanch78732RiverPlace /></Trace>} />
              <Route path="/areas/steiner-ranch-78732/barclay-place" element={<Trace name="/areas/steiner-ranch-78732/barclay-place"><NeighborhoodSteinerRanch78732BarclayPlace /></Trace>} />
              <Route path="/areas/steiner-ranch-78732/chaparral-cliffside" element={<Trace name="/areas/steiner-ranch-78732/chaparral-cliffside"><NeighborhoodSteinerRanch78732ChaparralCliffside /></Trace>} />
              <Route path="/areas/west-lake-hills-and-rollingwood" element={<Trace name="/areas/west-lake-hills-and-rollingwood"><HubWestLakeHillsAndRollingwood /></Trace>} />
              <Route path="/areas/west-lake-hills-and-rollingwood/rollingwood" element={<Trace name="/areas/west-lake-hills-and-rollingwood/rollingwood"><NeighborhoodWestLakeHillsAndRollingwoodRollingwood /></Trace>} />
              <Route path="/areas/west-lake-hills-and-rollingwood/west-lake-hills" element={<Trace name="/areas/west-lake-hills-and-rollingwood/west-lake-hills"><NeighborhoodWestLakeHillsAndRollingwoodWestLakeHills /></Trace>} />
              <Route path="/areas/west-lake-hills-and-rollingwood/spanish-oaks" element={<Trace name="/areas/west-lake-hills-and-rollingwood/spanish-oaks"><NeighborhoodWestLakeHillsAndRollingwoodSpanishOaks /></Trace>} />
              <Route path="/areas/west-lake-hills-and-rollingwood/davenport-ranch-west" element={<Trace name="/areas/west-lake-hills-and-rollingwood/davenport-ranch-west"><NeighborhoodWestLakeHillsAndRollingwoodDavenportRanch /></Trace>} />
              <Route path="/areas/west-lake-hills-and-rollingwood/lake-austin-hills" element={<Trace name="/areas/west-lake-hills-and-rollingwood/lake-austin-hills"><NeighborhoodWestLakeHillsAndRollingwoodLakeAustinHills /></Trace>} />
              <Route path="/areas/barton-creek" element={<Trace name="/areas/barton-creek"><HubBartonCreek /></Trace>} />
              <Route path="/areas/barton-creek/barton-creek-country-club-estates" element={<Trace name="/areas/barton-creek/barton-creek-country-club-estates"><NeighborhoodBartonCreekBartonCreekCountryClubEstates /></Trace>} />
              <Route path="/areas/barton-creek/fazio-foothills-cliffside" element={<Trace name="/areas/barton-creek/fazio-foothills-cliffside"><NeighborhoodBartonCreekFazioFoothillsCliffside /></Trace>} />
              <Route path="/areas/barton-creek/spyglass-bartons-bluff" element={<Trace name="/areas/barton-creek/spyglass-bartons-bluff"><NeighborhoodBartonCreekSpyglassBartonsBluff /></Trace>} />
              <Route path="/areas/barton-creek/lake-austin-west-estates" element={<Trace name="/areas/barton-creek/lake-austin-west-estates"><NeighborhoodBartonCreekLakeAustinWestEstates /></Trace>} />
              <Route path="/areas/barton-creek/barton-creek-west" element={<Trace name="/areas/barton-creek/barton-creek-west"><NeighborhoodBartonCreekBartonCreekWest /></Trace>} />
              <Route path="/areas/tarrytown" element={<Trace name="/areas/tarrytown"><HubTarrytown /></Trace>} />
              <Route path="/areas/tarrytown/tarrytown" element={<Trace name="/areas/tarrytown/tarrytown"><NeighborhoodTarrytownTarrytown /></Trace>} />
              <Route path="/areas/tarrytown/old-enfield" element={<Trace name="/areas/tarrytown/old-enfield"><NeighborhoodTarrytownOldEnfield /></Trace>} />
              <Route path="/areas/tarrytown/pemberton-heights" element={<Trace name="/areas/tarrytown/pemberton-heights"><NeighborhoodTarrytownPembertonHeights /></Trace>} />
              <Route path="/areas/tarrytown/bryker-woods" element={<Trace name="/areas/tarrytown/bryker-woods"><NeighborhoodTarrytownBrykerWoods /></Trace>} />
              <Route path="/areas/tarrytown/clarksville" element={<Trace name="/areas/tarrytown/clarksville"><NeighborhoodTarrytownClarksville /></Trace>} />
              <Route path="/areas/downtown-austin-luxury" element={<Trace name="/areas/downtown-austin-luxury"><HubDowntownAustinLuxury /></Trace>} />
              <Route path="/areas/downtown-austin-luxury/downtown-core-78701" element={<Trace name="/areas/downtown-austin-luxury/downtown-core-78701"><NeighborhoodDowntownAustinLuxuryDowntownCore78701 /></Trace>} />
              <Route path="/areas/downtown-austin-luxury/rainey-street-district" element={<Trace name="/areas/downtown-austin-luxury/rainey-street-district"><NeighborhoodDowntownAustinLuxuryRaineyStreetDistrict /></Trace>} />
              <Route path="/areas/downtown-austin-luxury/old-west-austin-central" element={<Trace name="/areas/downtown-austin-luxury/old-west-austin-central"><NeighborhoodDowntownAustinLuxuryOldWestAustin /></Trace>} />
              <Route path="/areas/downtown-austin-luxury/zilker" element={<Trace name="/areas/downtown-austin-luxury/zilker"><NeighborhoodDowntownAustinLuxuryZilker /></Trace>} />
              <Route path="/areas/downtown-austin-luxury/clarksville-west" element={<Trace name="/areas/downtown-austin-luxury/clarksville-west"><NeighborhoodDowntownAustinLuxuryClarksville /></Trace>} />
              <Route path="/areas/allandale-and-northwest-hills" element={<Trace name="/areas/allandale-and-northwest-hills"><HubAllandaleAndNorthwestHills /></Trace>} />
              <Route path="/areas/allandale-and-northwest-hills/allandale" element={<Trace name="/areas/allandale-and-northwest-hills/allandale"><NeighborhoodAllandaleAndNorthwestHillsAllandale /></Trace>} />
              <Route path="/areas/allandale-and-northwest-hills/northwest-hills" element={<Trace name="/areas/allandale-and-northwest-hills/northwest-hills"><NeighborhoodAllandaleAndNorthwestHillsNorthwestHills /></Trace>} />
              <Route path="/areas/allandale-and-northwest-hills/crestview" element={<Trace name="/areas/allandale-and-northwest-hills/crestview"><NeighborhoodAllandaleAndNorthwestHillsCrestview /></Trace>} />
              <Route path="/areas/allandale-and-northwest-hills/quail-creek" element={<Trace name="/areas/allandale-and-northwest-hills/quail-creek"><NeighborhoodAllandaleAndNorthwestHillsQuailCreek /></Trace>} />
              <Route path="/areas/allandale-and-northwest-hills/triangle-north-lamar" element={<Trace name="/areas/allandale-and-northwest-hills/triangle-north-lamar"><NeighborhoodAllandaleAndNorthwestHillsTriangleNorthLamar /></Trace>} />
              <Route path="/areas/lakeway-bee-cave-and-lake-travis" element={<Trace name="/areas/lakeway-bee-cave-and-lake-travis"><HubLakewayBeeCaveAndLakeTravis /></Trace>} />
              <Route path="/areas/lakeway-bee-cave-and-lake-travis/lakeway" element={<Trace name="/areas/lakeway-bee-cave-and-lake-travis/lakeway"><NeighborhoodLakewayBeeCaveAndLakeTravisLakeway /></Trace>} />
              <Route path="/areas/lakeway-bee-cave-and-lake-travis/rough-hollow" element={<Trace name="/areas/lakeway-bee-cave-and-lake-travis/rough-hollow"><NeighborhoodLakewayBeeCaveAndLakeTravisRoughHollow /></Trace>} />
              <Route path="/areas/lakeway-bee-cave-and-lake-travis/the-peninsula-at-rough-hollow" element={<Trace name="/areas/lakeway-bee-cave-and-lake-travis/the-peninsula-at-rough-hollow"><NeighborhoodLakewayBeeCaveAndLakeTravisThePeninsulaAtRoughHollow /></Trace>} />
              <Route path="/areas/lakeway-bee-cave-and-lake-travis/serenity-hills" element={<Trace name="/areas/lakeway-bee-cave-and-lake-travis/serenity-hills"><NeighborhoodLakewayBeeCaveAndLakeTravisSerenityHills /></Trace>} />
              <Route path="/areas/lakeway-bee-cave-and-lake-travis/bee-cave" element={<Trace name="/areas/lakeway-bee-cave-and-lake-travis/bee-cave"><NeighborhoodLakewayBeeCaveAndLakeTravisBeeCave /></Trace>} />
              <Route path="/areas/circle-c-ranch-and-southwest-austin" element={<Trace name="/areas/circle-c-ranch-and-southwest-austin"><HubCircleCRanchAndSouthwestAustin /></Trace>} />
              <Route path="/areas/circle-c-ranch-and-southwest-austin/circle-c-ranch" element={<Trace name="/areas/circle-c-ranch-and-southwest-austin/circle-c-ranch"><NeighborhoodCircleCRanchAndSouthwestAustinCircleCRanch /></Trace>} />
              <Route path="/areas/circle-c-ranch-and-southwest-austin/grey-rock" element={<Trace name="/areas/circle-c-ranch-and-southwest-austin/grey-rock"><NeighborhoodCircleCRanchAndSouthwestAustinGreyRock /></Trace>} />
              <Route path="/areas/circle-c-ranch-and-southwest-austin/lost-creek" element={<Trace name="/areas/circle-c-ranch-and-southwest-austin/lost-creek"><NeighborhoodCircleCRanchAndSouthwestAustinLostCreek /></Trace>} />
              <Route path="/areas/circle-c-ranch-and-southwest-austin/shady-hollow" element={<Trace name="/areas/circle-c-ranch-and-southwest-austin/shady-hollow"><NeighborhoodCircleCRanchAndSouthwestAustinShadyHollow /></Trace>} />
              <Route path="/areas/circle-c-ranch-and-southwest-austin/west-oak-hill" element={<Trace name="/areas/circle-c-ranch-and-southwest-austin/west-oak-hill"><NeighborhoodCircleCRanchAndSouthwestAustinWestOakHill /></Trace>} />
              <Route path="/areas/pemberton-heights-and-old-west-austin-historic-luxury" element={<Trace name="/areas/pemberton-heights-and-old-west-austin-historic-luxury"><HubPembertonHeightsAndOldWestAustinHistoricLuxury /></Trace>} />
              <Route path="/areas/pemberton-heights-and-old-west-austin-historic-luxury/pemberton-heights-south" element={<Trace name="/areas/pemberton-heights-and-old-west-austin-historic-luxury/pemberton-heights-south"><NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryPembertonHeights /></Trace>} />
              <Route path="/areas/pemberton-heights-and-old-west-austin-historic-luxury/old-enfield-west" element={<Trace name="/areas/pemberton-heights-and-old-west-austin-historic-luxury/old-enfield-west"><NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryOldEnfield /></Trace>} />
              <Route path="/areas/pemberton-heights-and-old-west-austin-historic-luxury/bryker-woods-west" element={<Trace name="/areas/pemberton-heights-and-old-west-austin-historic-luxury/bryker-woods-west"><NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryBrykerWoods /></Trace>} />
              <Route path="/areas/pemberton-heights-and-old-west-austin-historic-luxury/clarksville-historic" element={<Trace name="/areas/pemberton-heights-and-old-west-austin-historic-luxury/clarksville-historic"><NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryClarksville /></Trace>} />
              <Route path="/areas/pemberton-heights-and-old-west-austin-historic-luxury/old-west-austin-historic" element={<Trace name="/areas/pemberton-heights-and-old-west-austin-historic-luxury/old-west-austin-historic"><NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryOldWestAustin /></Trace>} />

              {/* SERVICE + LOCATION PAGES - 36 total: 4 services x 9 locations */}
              <Route path="/interior-painting-round-rock" element={<Trace name="/interior-painting-round-rock"><InteriorPaintingRoundRock /></Trace>} />
              <Route path="/interior-painting-georgetown" element={<Trace name="/interior-painting-georgetown"><InteriorPaintingGeorgetown /></Trace>} />
              <Route path="/interior-painting-cedar-park" element={<Trace name="/interior-painting-cedar-park"><InteriorPaintingCedarPark /></Trace>} />
              <Route path="/interior-painting-pflugerville" element={<Trace name="/interior-painting-pflugerville"><InteriorPaintingPflugerville /></Trace>} />
              <Route path="/interior-painting-leander" element={<Trace name="/interior-painting-leander"><InteriorPaintingLeander /></Trace>} />
              <Route path="/interior-painting-taylor" element={<Trace name="/interior-painting-taylor"><InteriorPaintingTaylor /></Trace>} />
              <Route path="/interior-painting-hutto" element={<Trace name="/interior-painting-hutto"><InteriorPaintingHutto /></Trace>} />
              <Route path="/interior-painting-austin" element={<Trace name="/interior-painting-austin"><InteriorPaintingAustin /></Trace>} />
              <Route path="/interior-painting-west-lake-hills" element={<Trace name="/interior-painting-west-lake-hills"><InteriorPaintingWestLakeHills /></Trace>} />
              <Route path="/exterior-painting-round-rock" element={<Trace name="/exterior-painting-round-rock"><ExteriorPaintingRoundRock /></Trace>} />
              <Route path="/exterior-painting-georgetown" element={<Trace name="/exterior-painting-georgetown"><ExteriorPaintingGeorgetown /></Trace>} />
              <Route path="/exterior-painting-cedar-park" element={<Trace name="/exterior-painting-cedar-park"><ExteriorPaintingCedarPark /></Trace>} />
              <Route path="/exterior-painting-pflugerville" element={<Trace name="/exterior-painting-pflugerville"><ExteriorPaintingPflugerville /></Trace>} />
              <Route path="/exterior-painting-leander" element={<Trace name="/exterior-painting-leander"><ExteriorPaintingLeander /></Trace>} />
              <Route path="/exterior-painting-taylor" element={<Trace name="/exterior-painting-taylor"><ExteriorPaintingTaylor /></Trace>} />
              <Route path="/exterior-painting-hutto" element={<Trace name="/exterior-painting-hutto"><ExteriorPaintingHutto /></Trace>} />
              <Route path="/exterior-painting-austin" element={<Trace name="/exterior-painting-austin"><ExteriorPaintingAustin /></Trace>} />
              <Route path="/exterior-painting-west-lake-hills" element={<Trace name="/exterior-painting-west-lake-hills"><ExteriorPaintingWestLakeHills /></Trace>} />
              <Route path="/cabinet-refinishing-round-rock" element={<Trace name="/cabinet-refinishing-round-rock"><CabinetRefinishingRoundRock /></Trace>} />
              <Route path="/cabinet-refinishing-georgetown" element={<Trace name="/cabinet-refinishing-georgetown"><CabinetRefinishingGeorgetown /></Trace>} />
              <Route path="/cabinet-refinishing-cedar-park" element={<Trace name="/cabinet-refinishing-cedar-park"><CabinetRefinishingCedarPark /></Trace>} />
              <Route path="/cabinet-refinishing-pflugerville" element={<Trace name="/cabinet-refinishing-pflugerville"><CabinetRefinishingPflugerville /></Trace>} />
              <Route path="/cabinet-refinishing-leander" element={<Trace name="/cabinet-refinishing-leander"><CabinetRefinishingLeander /></Trace>} />
              <Route path="/cabinet-refinishing-taylor" element={<Trace name="/cabinet-refinishing-taylor"><CabinetRefinishingTaylor /></Trace>} />
              <Route path="/cabinet-refinishing-hutto" element={<Trace name="/cabinet-refinishing-hutto"><CabinetRefinishingHutto /></Trace>} />
              <Route path="/cabinet-refinishing-austin" element={<Trace name="/cabinet-refinishing-austin"><CabinetRefinishingAustin /></Trace>} />
              <Route path="/cabinet-refinishing-west-lake-hills" element={<Trace name="/cabinet-refinishing-west-lake-hills"><CabinetRefinishingWestLakeHills /></Trace>} />
              <Route path="/commercial-painting-round-rock" element={<Trace name="/commercial-painting-round-rock"><CommercialPaintingRoundRock /></Trace>} />
              <Route path="/commercial-painting-georgetown" element={<Trace name="/commercial-painting-georgetown"><CommercialPaintingGeorgetown /></Trace>} />
              <Route path="/commercial-painting-cedar-park" element={<Trace name="/commercial-painting-cedar-park"><CommercialPaintingCedarPark /></Trace>} />
              <Route path="/commercial-painting-pflugerville" element={<Trace name="/commercial-painting-pflugerville"><CommercialPaintingPflugerville /></Trace>} />
              <Route path="/commercial-painting-leander" element={<Trace name="/commercial-painting-leander"><CommercialPaintingLeander /></Trace>} />
              <Route path="/commercial-painting-taylor" element={<Trace name="/commercial-painting-taylor"><CommercialPaintingTaylor /></Trace>} />
              <Route path="/commercial-painting-hutto" element={<Trace name="/commercial-painting-hutto"><CommercialPaintingHutto /></Trace>} />
              <Route path="/commercial-painting-austin" element={<Trace name="/commercial-painting-austin"><CommercialPaintingAustin /></Trace>} />
              <Route path="/commercial-painting-west-lake-hills" element={<Trace name="/commercial-painting-west-lake-hills"><CommercialPaintingWestLakeHills /></Trace>} />

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