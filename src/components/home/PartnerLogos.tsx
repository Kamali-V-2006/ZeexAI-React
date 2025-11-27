import React from "react";
import iitm from "../../assets/images/iitm.png";
import nirmaan from "../../assets/images/nirmaan.png";
import aws from "../../assets/images/aws.png";
import nvidia from "../../assets/images/nvidia.png";
const PartnerLogos: React.FC = () => {
  return (
    <section className="partner-logos">
      <div className="logo-card">
        <img src={iitm} className="logo-img" alt="iitm" />
      </div>

      <div className="logo-card">
        <img src={nirmaan} className="logo-img" alt="nirmaan" />
      </div>

      <div className="logo-card">
        <img src={aws} className="logo-img" alt="aws" />
      </div>

      <div className="logo-card">
        <img src={nvidia} className="logo-img" alt="nvidia" />
      </div>
    </section>
  );
};

export default PartnerLogos;
