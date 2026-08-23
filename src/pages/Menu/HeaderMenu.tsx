import React, { JSX } from "react";
import { NavLink } from "react-router-dom";
import menu from "../../images/Menu.webp";
import {
  BlueskyIcon,
  EmailIcon,
  FacebookIcon,
  GoodreadsIcon,
  InstagramIcon,
  TiktokIcon,
} from "./SocialIcons";

import logo from "../../images/TG Transparent Background.webp";

interface MenuState {
  menuShown: boolean;
}

export class HeaderMenu extends React.Component<{}, MenuState> {
  public constructor(props: {}) {
    super(props);
    this.state = { menuShown: false };
  }

  showMenu(): void {
    this.setState({
      menuShown: !this.state.menuShown,
    });
  }

  public render(): JSX.Element {
    return (
      <div className="header-menu">
        <NavLink to="/">
          <img className="header-logo" alt="logo" src={logo} />
        </NavLink>
        <h1>Tristan Gray</h1>
        <button onClick={() => this.showMenu()} className="menu">
          <img alt="menu" src={menu} />
        </button>
        <div
          className={
            this.state.menuShown ? "menu-items show-menu" : "menu-items"
          }
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Blog">Blog</NavLink>
          <NavLink to="/Languages">Language</NavLink>
          <NavLink to="/Recommendations">Recommendations</NavLink>
          <NavLink to="/TreeSphere">TreeSphere Apps</NavLink>
        </div>
        <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/tgraywrites"
            aria-label="Facebook"
          >
            <FacebookIcon className="social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/tgraywrites"
            aria-label="Instagram"
          >
            <InstagramIcon className="social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bsky.app/profile/eidyngray.scot"
            aria-label="Bluesky"
          >
            <BlueskyIcon className="social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@tgraywrites"
            aria-label="TikTok"
          >
            <TiktokIcon className="social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.goodreads.com/author/show/20606471.Tristan_Gray"
            aria-label="Goodreads"
          >
            <GoodreadsIcon className="social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:tristan@eidyngray.scot?subject=Website Contact"
            aria-label="Email"
          >
            <EmailIcon className="social-icon" />
          </a>
        </div>
      </div>
    );
  }
}
