import MainPage from "./pages/Main/MainPage";
import reportWebVitals from "./reportWebVitals";
import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import LanguagePage from "./pages/Language/LanguagePage";
import RecommendationsPage from "./pages/Recommendations/RecommendationsPage";
import OtherWritingPage from "./pages/OtherWriting/OtherWritingPage";
import BlogPage from "./pages/Blog/BlogPage";
import PaymentCompletePage from "./pages/Payment Complete/PaymentComplete";
import EdNoWriMo from "./pages/EdNoWriMo/EdNoWriMo";
import { ReaderDisplay } from "./pages/Reader/ReaderDisplay";
import ConsultationResponsePage from "./pages/AIConsultation/ConsultationResponsePage";
import { createRoot } from "react-dom/client";
import HeaderMenu from "./pages/Menu/HeaderMenu";

const routing = (
  <HashRouter>
    <div className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Languages" element={<LanguagePage />} />
        <Route path="/Recommendations" element={<RecommendationsPage />} />
        <Route path="/Writing" element={<OtherWritingPage />} />
        <Route path="/Payment" element={<PaymentCompletePage />} />
        <Route path="/EdNoWriMo" element={<EdNoWriMo />} />
        <Route path="/Reader" element={<ReaderDisplay />} />
        <Route path="/AIConsultation" element={<ConsultationResponsePage />} />
      </Routes>
    </div>
  </HashRouter>
);

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(routing);

reportWebVitals();
