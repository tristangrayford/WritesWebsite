import { useState } from "react";
import BuyModal from "../BuyModal/BuyModal";
import BuyLinksUK from "../../dtos/BuyLinksUK";
import BuyLinksUS from "../../dtos/BuyLinksUS";
import GoodreadsWidget from "./GoodreadsWidget";
import whispers from "../../images/book-covers/small/Whispers.png";
import blackwing from "../../images/book-covers/small/Blackwing.png";
import kickstarter from "../../images/KickStarter Lead Wide.png";
import map from "../../images/Seann Aite.png";
import arrow from "../../images/Arrow.png";
import { BookItem } from "./BookItem";
import CallVideo from "../../videos/Call of the Black Wing Intro From Mhairi Bryce.mp4";

const whispersDesc = (
  <p>
    The first tale in Call of the Black Wing - Paid to unearth the fate of the
    children of the Three Willows, Fiadh expects the work of a predatory fey.
    <br />
    <br /> But this was a very different kind of monster who preyed upon the
    village folk. One that would leave her no choice but to journey into the
    wilderness beyond.
    <br />
    <br /> Experience an adventure in the world of Seann Àite, inspired by the
    myths and folklore of dark age Scotland.
    <br />
    <br /> The dialogue features sections written in the Scots language which is
    used throughout the series.
  </p>
);

const fullDesc = (
  <p>
    In a treacherous world filled with deception and distrust, Fiadh the Crow
    had plied her trade ridding the people of the Seann Àite of spirits and
    monsters.
    <br />
    <br />
    Beneath it all lies whispers in the dark leading men astray, whispers from a
    world beyond her own. Dark pacts are struck, and innocent souls are
    sacrificed for the promise of power from beyond.
    <br />
    <br />
    Far from home, Fiadh travels seeking answers gripping the fell blade
    Caerdrich. Together they journey the seas seeking revenge for the loss those
    whispers brought them so long ago.
  </p>
);

function MainPage() {
  const [selected] = useState(false);
  const [mapClicked, setMapClicked] = useState(false);

  return (
    <div
      className={"main-page" + (selected || mapClicked ? " popup-active" : "")}
    >
      <script
        type="text/javascript"
        charSet="utf-8"
        src="https://www.goodreads.com/author/author_widget/20606471.Tristan_Gray?widget_id=1699907161"
      ></script>
      <BuyModal />
      <div className="series-title">
        {/* <img src={trees} alt="Tales of the Seann Àite" />
          <h2>- Tales of the Seann Àite -</h2> */}
        <a href="https://www.kickstarter.com/projects/tristangray/call-of-the-black-wing-an-audiobook">
          <img
            src={kickstarter}
            alt="Call of the Black Wing Audiobook Kickstarter"
          />
        </a>
      </div>
      <div className="buy-direct">
        <img className="arrow arrow-one" src={arrow} alt="Arrow" />
        <a href="https://ko-fi.com/tristangray/shop">
          Click to Buy The Tales From Me Directly
        </a>
        <img className="arrow arrow-two" src={arrow} alt="Arrow" />
      </div>
      <div className="books">
        <div className="video-container">
          <h2>A reading from Call of the Black Wing</h2>
          <h3>Reader: Mhairi Bryce</h3>
          <iframe
            title="Call of the Black Wing Video"
            className="embed-video"
            src={CallVideo}
          ></iframe>
        </div>
        <BookItem
          bookItemContent={fullDesc}
          bookItemTitle="Call of the Black Wing"
          bookItemImage={blackwing}
          bookItemLinksUK={BuyLinksUK["Call"]}
          bookItemLinksUS={BuyLinksUS["Call"]}
        />
        <BookItem
          bookItemContent={whispersDesc}
          bookItemTitle="Whispers To A Crow"
          bookItemImage={whispers}
          bookItemLinksUK={BuyLinksUK["Whispers"]}
          bookItemLinksUS={BuyLinksUS["Whispers"]}
        />
        <div className="map-container">
          <h2>Map of Seann Àite</h2>
          <p>Click to see more</p>
          <button
            className={mapClicked ? "map-selected map-section" : "map-section"}
          >
            <img
              alt="map of Seann Àite"
              src={map}
              onClick={() => {
                setMapClicked(!mapClicked);
              }}
            />
          </button>
        </div>
      </div>
      <GoodreadsWidget />
    </div>
  );
}

export default MainPage;
