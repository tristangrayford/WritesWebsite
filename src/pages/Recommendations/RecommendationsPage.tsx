import { Swiper } from "./Swiper";
import dragonbone from "../../images/recommendations/Dragonbone Chair.webp";
import magician from "../../images/recommendations/Magician.jpg";
import nightwatch from "../../images/recommendations/Night Watch.webp";
import fifthseason from "../../images/recommendations/Fifth Season.webp";
import bonewitch from "../../images/recommendations/Bone Witch.webp";
import daughter from "../../images/recommendations/Daughter of the Empire.jpg";
import lastwish from "../../images/recommendations/The Last Wish.webp";
import gideon from "../../images/recommendations/Gideon.jpg";
import priory from "../../images/recommendations/Priory.jpg";
import hades from "../../images/recommendations/Hades.webp";

import monstress from "../../images/recommendations/Monstress.webp";
import die from "../../images/recommendations/DIE.jpg";
import highesthouse from "../../images/recommendations/Highest House.webp";
import coda from "../../images/recommendations/CODA.webp";
import isola from "../../images/recommendations/Isola.jpg";
import sandman from "../../images/recommendations/Sandman.webp";
import reaver from "../../images/recommendations/Reaver.webp";
import ratqueens from "../../images/recommendations/Rat Queens.webp";

import horizon from "../../images/recommendations/Horizon.webp";
import journey from "../../images/recommendations/Journey.webp";
import hollow from "../../images/recommendations/Hollow Knight.webp";
import witcher from "../../images/recommendations/Witcher 3.webp";
import godofwar from "../../images/recommendations/God of War.webp";
import hellblade from "../../images/recommendations/Hellblade.webp";
import ori from "../../images/recommendations/Ori.webp";
import jedi from "../../images/recommendations/Jedi Fallen Order.webp";
import control from "../../images/recommendations/Control.webp";
import shadowofwar from "../../images/recommendations/Shadow of War.webp";
import celeste from "../../images/recommendations/Celeste.webp";
import hallOfSmoke from "../../images/recommendations/Hall of Smoke.webp";

import alanlee from "../../images/recommendations/Alan Lee.webp";
import almg from "../../images/recommendations/ALMG.webp";
import anato from "../../images/recommendations/Anato Finnstark.webp";
import syd from "../../images/recommendations/Syd Mills.webp";
import bastien from "../../images/recommendations/Bastien.webp";

export const RecommendationsPage = () => {
  const books = [
    <div key="dragonbone">
      <img src={dragonbone} alt="The Dragonbone Chair" />
    </div>,
    <div key="gideon">
      <img src={gideon} alt="Gideon the Ninth" />
    </div>,
    <div key="magician">
      <img src={magician} alt="Magician" />
    </div>,
    <div key="lastwish">
      <img src={lastwish} alt="The Last Wish" />
    </div>,
    <div key="nightwatch">
      <img src={nightwatch} alt="Night Watch" />
    </div>,
    <div key="fifthseason">
      <img src={fifthseason} alt="The Fifth Season" />
    </div>,
    <div key="bonewitch">
      <img src={bonewitch} alt="The Bone Witch" />
    </div>,
    <div key="priory">
      <img src={priory} alt="The Priory of the Orange Tree" />
    </div>,
    <div key="daughter">
      <img src={daughter} alt="Daughter of the Empire" />
    </div>,
    <div key="hall">
      <img src={hallOfSmoke} alt="Hall of Smoke" />
    </div>,
  ];

  const graphicNovels = [
    <div key="monstress">
      <img src={monstress} alt="Monstress" />
    </div>,
    <div key="die">
      <img src={die} alt="DIE" />
    </div>,
    <div key="highesthouse">
      <img src={highesthouse} alt="The Highest House" />
    </div>,
    <div key="coda">
      <img src={coda} alt="Coda" />
    </div>,
    <div key="isola">
      <img src={isola} alt="Isola" />
    </div>,
    <div key="sandman">
      <img src={sandman} alt="Sandman" />
    </div>,
    <div key="reaver">
      <img src={reaver} alt="Reaver" />
    </div>,
    <div key="ratqueens">
      <img src={ratqueens} alt="Rat Queens" />
    </div>,
  ];

  const games = [
    <div key="horizon">
      <img src={horizon} alt="Horizon Zero Dawn" />
    </div>,
    <div key="journey">
      <img src={journey} alt="Journey" />
    </div>,
    <div key="hollow">
      <img src={hollow} alt="Hollow Knight" />
    </div>,
    <div key="witcher">
      <img src={witcher} alt="The Witcher 3" />
    </div>,
    <div key="godofwar">
      <img src={godofwar} alt="God of War 2018" />
    </div>,
    <div key="hellblade">
      <img src={hellblade} alt="Hellblade: Senua's Sacrifice" />
    </div>,
    <div key="ori">
      <img src={ori} alt="Ori Duology" />
    </div>,
    <div key="jedi">
      <img src={jedi} alt="Jedi: Fallen Order" />
    </div>,
    <div key="control">
      <img src={control} alt="Control" />
    </div>,
    <div key="shadowofwar">
      <img src={shadowofwar} alt="Middle Earth: Shadow of War" />
    </div>,
    <div key="celeste">
      <img src={celeste} alt="Celeste" />
    </div>,
    <div key="hades">
      <img src={hades} alt="Hades" />
    </div>,
  ];

  const artists = [
    <div key="anato">
      <img src={anato} alt="Anato Finnstark" />
    </div>,
    <div key="syd">
      <img src={syd} alt="Syd Mills" />
    </div>,
    <div key="almg">
      <img id="almg" src={almg} alt="Anna Le Moine Gray" />
    </div>,
    <div key="alanLee">
      <img src={alanlee} alt="Alan Lee" />
    </div>,
    <div key="bastien">
      <img src={bastien} alt="Bastien LeCouffe DeHarme" />
    </div>,
  ];

  return (
    <div className="recommendations-page">
      <h1>Recommendations</h1>
      <h2>Conventional Novels</h2>
      <Swiper children={books} />
      <h2>Graphic Novels</h2>
      <Swiper children={graphicNovels} />
      <h2>Video Games</h2>
      <Swiper children={games} />
      <h2>Artists</h2>
      <Swiper children={artists} />
    </div>
  );
};
