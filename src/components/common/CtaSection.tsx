import React from "react";
 // optional if you separate CSS

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section id="cta-box" className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-description">{description}</p>

        <a href={buttonLink} className="cta-button cta-link">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
