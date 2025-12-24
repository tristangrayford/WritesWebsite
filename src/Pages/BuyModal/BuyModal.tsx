import React, { JSX } from "react";

import whispers from "../../images/book-covers/small/Whispers.png";

class BuyModal extends React.Component {
  public render(): JSX.Element {
    return (
      <a href="https://ko-fi.com/tristangray/shop" className="buy-modal">
        <h2>Buy Now</h2>
        <img src={whispers} alt="Whispers of a Crow Cover" />
        <h3>£0.99/$0.99</h3>
      </a>
    );
  }
}

export default BuyModal;
