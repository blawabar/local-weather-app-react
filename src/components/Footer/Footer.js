import React, { useRef } from "react";

import "./Footer.scss";

export const Footer = () => {
  const creditsInfo = useRef([
    {
      text: "Weather API:",
      linkRef: "http://openweathermap.org",
      linkText: "Open Weather Map",
    },
    {
      text: "Weather Font:",
      linkRef: "https://www.behance.net/artill",
      linkText: "Lukas Bischoff",
    },
    {
      text: "Weather images:",
      linkRef: "https://www.flickr.com/photos/archikvadrat/",
      linkText: "Anatol C.",
    },
  ]);

  return (
    <footer className="footer">
      <section className="footer__copyright">
        Local Weather Application (Bart Krolak, 2020)
      </section>
      {creditsInfo.current.map(({ text, linkRef, linkText }, index) => {
        return (
          <section key={index} className="footer__credits">
            <span className="footer__text">{text}</span>
            <a
              className="footer__link"
              href={linkRef}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </a>
          </section>
        );
      })}
    </footer>
  );
};
