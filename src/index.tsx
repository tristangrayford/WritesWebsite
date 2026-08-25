import { MainPage } from "./Pages/Main/MainPage";
import reportWebVitals from "./reportWebVitals";
import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./Pages/About/AboutPage";
import { LanguagePage } from "./Pages/Language/LanguagePage";
import { RecommendationsPage } from "./Pages/Recommendations/RecommendationsPage";
import { OtherWritingPage } from "./Pages/OtherWriting/OtherWritingPage";
import { BlogPage } from "./Pages/Blog/BlogPage";
import { EdNoWriMo } from "./Pages/EdNoWriMo/EdNoWriMo";
import { ReaderDisplay } from "./Pages/Reader/ReaderDisplay";
import { ConsultationResponsePage } from "./Pages/AIConsultation/ConsultationResponsePage";
import { createRoot } from "react-dom/client";
import { HeaderMenu } from "./Pages/Menu/HeaderMenu";
import { PrivacyPage } from "./Pages/TreeReader/PrivacyPage";
import { TreeSpherePage } from "./Pages/TreeSphere/TreeSpherePage";

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
        <Route path="/EdNoWriMo" element={<EdNoWriMo />} />
        <Route path="/Reader" element={<ReaderDisplay />} />
        <Route path="/AIConsultation" element={<ConsultationResponsePage />} />
        <Route path="/Privacy" element={<PrivacyPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPage />} />
        <Route path="/TreeSphere" element={<TreeSpherePage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  </HashRouter>
);

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(routing);

reportWebVitals();
