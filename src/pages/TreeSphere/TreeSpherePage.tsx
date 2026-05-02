import TreeSphereLogo from "../../images/logos/TreeSphere.png";
import TreeScriptLogo from "../../images/logos/TreeScript.png";
import TreeReaderLogo from "../../images/logos/TreeReader.png";

export const TreeSpherePage = () => {
  return (
    <div className="treesphere-page">
      <div className="hero">
        <img
          className="suite-logo"
          src={TreeSphereLogo}
          alt="TreeSphere logo"
        />
        <h1>TreeSphere</h1>
        <p className="tagline">
          A suite of writing and reading apps, built by a solo founder and
          developer.
        </p>
        <ul className="highlights">
          <li>Web and Android apps</li>
          <li>React Native development</li>
        </ul>
      </div>

      <div className="apps">
        <div className="app">
          <img
            className="app-logo"
            src={TreeScriptLogo}
            alt="TreeScript logo"
          />
          <h2>
            <a href="https://TreeScript.app" target="_blank" rel="noreferrer">
              TreeScript.app
            </a>
          </h2>
          <ul>
            <li>Writing tracking app</li>
            <li>Goals tracking and visualisation</li>
            <li>Friends connections</li>
          </ul>
        </div>

        <div className="app">
          <img
            className="app-logo"
            src={TreeReaderLogo}
            alt="TreeReader logo"
          />
          <h2>
            <a href="https://TreeReader.app" target="_blank" rel="noreferrer">
              TreeReader.app
            </a>
          </h2>
          <ul>
            <li>eReader</li>
            <li>Lightweight, full featured app with focus on readability</li>
            <li>Public Domain works access</li>
          </ul>
        </div>
      </div>

      <div className="community">
        <h2>Join the Community</h2>
        <p>
          Chat with the developer, request features, report bugs, and connect
          with other writers and readers using TreeSphere apps.
        </p>
        <a
          className="discord-link"
          href="https://discord.gg/cQufWa2N"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the TreeSphere Discord
        </a>
      </div>
    </div>
  );
};
