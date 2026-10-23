import React, { Fragment } from "react";
import FooterCss from "./Footer.module.css";
const Footer = () => {
  return (
    <Fragment>
      <div className={FooterCss.Footer}>
        <div className={FooterCss.FooterGroup}>
          <div className={FooterCss.Logos}>
            <img className={FooterCss.Logo} src="/images/Untitled-1 2.png" />
            <span
              className={FooterCss.Instagram}
              title=" ورود به صفحه اینستا "
            ></span>
            <span
              className={FooterCss.Telegram}
              title=" ورود به کانال تلگرام "
            ></span>
          </div>
          <div
            className={FooterCss.Description}
            style={{ paddingRight: "100px" }}
          >
            <h1 style={{ fontSize: "24px", fontWeight: "800" }}>
              {" "}
              آکادمی کدنویسی بحر{" "}
            </h1>
            <p
              style={{
                overflowWrap: "break-word",
                width: "315px",
                fontSize: "16px",
                fontWeight: "500",
                color: "#787878",
              }}
            >
              {" "}
              +13 سال سابقه فعالیت در زمینه آموزش کدنویسی از سنین کودکی تا
              بزرگسال. هدف ما همیشه این بوده که دانشجویان را با مهارت های لازم
              برای موفقیت در دنیای فناوری و برنامه نویسی مجهز کنیم.{" "}
            </p>
          </div>
          <div
            className={FooterCss.Pages}
            style={{
              paddingRight: "100px",
              listStyle: "none",
              display: "flex",
              flexFlow: "column",
              gap: "10px",
            }}
          >
            <li
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#787878",
                marginBottom: "35px",
              }}
            >
              {" "}
              صفحات{" "}
            </li>
            <li style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
              {" "}
              خانه{" "}
            </li>
            <li style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
              {" "}
              دوره ها{" "}
            </li>
            <li style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
              {" "}
              اخبار و مقالات{" "}
            </li>
          </div>
          <div
            className={FooterCss.Us}
            style={{
              paddingRight: "100px",
              listStyle: "none",
              display: "flex",
              flexFlow: "column",
              gap: "10px",
            }}
          >
            <li
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#787878",
                marginBottom: "35px",
              }}
            >
              {" "}
              ما{" "}
            </li>
            <li style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
              {" "}
              اساتید{" "}
            </li>
            <li style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
              {" "}
              درباره ما{" "}
            </li>
            <li style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
              {" "}
              ارتباط با ما{" "}
            </li>
          </div>
          <div className={FooterCss.ElectronicTrustSymbol}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
