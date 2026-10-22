import React, { Fragment } from "react";
import FooterCss from "./Footer.module.css";
const Footer = () => {
  return (
    <Fragment>
      <div className={FooterCss.Footer}>
        <div className={FooterCss.FooterGroup} >
          <div className={FooterCss.Logos} >
            <img className={FooterCss.Logo} src="/images/Untitled-1 2.png" />
            <span className={FooterCss.Instagram} title=" ورود به صفحه اینستا " ></span>
            <span className={FooterCss.Telegram} ></span>
          </div>
          <div className={FooterCss.Description} ></div>
          <div className={FooterCss.Pages} ></div>
          <div className={FooterCss.Us} ></div>
          <div className={FooterCss.ElectronicTrustSymbol} ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
