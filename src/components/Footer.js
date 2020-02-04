import React from "react";

import "./Footer.scss";

const Footer = () => {
  const creditsInfo = [
    {
      text: "Weather API:",
      linkRef: "http://openweathermap.org",
      linkText: "Open Weather Map"
    },
    {
      text: "Weather Font:",
      linkRef: "https://www.behance.net/artill",
      linkText: "Lukas Bischoff"
    },
    {
      text: "Weather images:",
      linkRef: "https://www.flickr.com/photos/archikvadrat/",
      linkText: "Anatol C."
    }
  ];

  return (
    <footer className="footer">
      <section className="footer__copyright">
        Local Weather Application (Bart Krolak, 2020)
      </section>
      {creditsInfo.map(({ text, linkRef, linkText }, index) => {
        return (
          <section key={index} className="footer__credits">
            <span className="footer__text">{text}</span>
            <a className="footer__link" href={linkRef} target="_blank">
              {linkText}
            </a>
          </section>
        );
      })}
    </footer>
  );
};

export default Footer;
