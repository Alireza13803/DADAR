import React, { Fragment } from "react";
import CertificateCss from "./Certificate.module.css";
const Certificate = () => {
  return (
    <Fragment>
      <div className={CertificateCss.Certificate}>
        {Array.from({ length: 4 }, (_, index) => (
          <div className={CertificateCss.Card} key={index}>
            <span className={CertificateCss.Number}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <hr
              style={{
                border: "1px solid #E4E4E4",
                width: "90%",
                borderRadius: "32px",
              }}
            />

            <span
              style={{
                fontWeight: "700",
                fontSize: "24px",
                margin: "10px 15px",
              }}
            >
              مدرک معتبر
            </span>

            <span
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                margin: "5px 15px",
                color: "#787878",
              }}
            >
              بعدا اینجا پر میشه
            </span>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Certificate;
